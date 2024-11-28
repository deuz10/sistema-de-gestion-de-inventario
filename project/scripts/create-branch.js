const inquirer = require('inquirer');
const simpleGit = require('simple-git');
const chalk = require('chalk');

const git = simpleGit();

async function createFeatureBranch() {
  try {
    const { featureName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'featureName',
        message: 'Nombre de la característica o tarea:',
        validate: input => input.length > 0 || 'Por favor ingresa un nombre válido'
      }
    ]);

    const branchName = `feature/${featureName.toLowerCase().replace(/\s+/g, '-')}`;

    // Asegurarse de estar en develop
    await git.checkout('develop');
    await git.pull('origin', 'develop');

    // Crear y cambiar al nuevo branch
    await git.checkoutLocalBranch(branchName);

    console.log(chalk.green(`\n✓ Branch ${branchName} creado exitosamente`));
    console.log(chalk.blue('\nPuedes comenzar a trabajar en tu característica.'));
    console.log(chalk.yellow('Cuando termines, usa "npm run pr" para crear un pull request.'));

  } catch (error) {
    console.error(chalk.red('\n✗ Error al crear el branch:'), error.message);
    process.exit(1);
  }
}

createFeatureBranch();