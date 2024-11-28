const inquirer = require('inquirer');
const simpleGit = require('simple-git');
const chalk = require('chalk');

const git = simpleGit();

async function createPullRequest() {
  try {
    const currentBranch = await git.revparse(['--abbrev-ref', 'HEAD']);
    
    if (currentBranch === 'master' || currentBranch === 'develop') {
      console.error(chalk.red('\n✗ No puedes crear un PR desde master o develop'));
      process.exit(1);
    }

    const { title, description } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Título del Pull Request:',
        validate: input => input.length > 0 || 'El título es requerido'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Descripción del Pull Request:'
      }
    ]);

    // Commit cambios pendientes
    const status = await git.status();
    if (status.files.length > 0) {
      const { commitMessage } = await inquirer.prompt([
        {
          type: 'input',
          name: 'commitMessage',
          message: 'Mensaje para el commit:',
          validate: input => input.length > 0 || 'El mensaje es requerido'
        }
      ]);

      await git.add('./*');
      await git.commit(commitMessage);
    }

    // Push al branch remoto
    await git.push('origin', currentBranch);

    console.log(chalk.green('\n✓ Cambios subidos exitosamente'));
    console.log(chalk.blue('\nPara completar el proceso:'));
    console.log(chalk.yellow('1. Ve al repositorio en el navegador'));
    console.log(chalk.yellow('2. Crea el Pull Request desde tu branch a develop'));
    console.log(chalk.yellow('3. Asigna revisores al PR'));

  } catch (error) {
    console.error(chalk.red('\n✗ Error al crear el Pull Request:'), error.message);
    process.exit(1);
  }
}

createPullRequest();