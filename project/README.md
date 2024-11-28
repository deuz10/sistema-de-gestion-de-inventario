# Sistema de Gestión de Boutique

Sistema de gestión para boutique con módulo de inventario que incluye funcionalidades CRUD y alertas de stock bajo.

## Características (Beta)

- Gestión completa de inventario (CRUD)
- Alertas automáticas de stock bajo
- Validación de datos
- Logging de operaciones
- Manejo de errores centralizado

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB
- npm o yarn

## Instalación

1. Clonar el repositorio:
\`\`\`bash
git clone [url-del-repositorio]
\`\`\`

2. Instalar dependencias:
\`\`\`bash
npm install
\`\`\`

3. Configurar variables de entorno:
\`\`\`bash
cp .env.example .env
\`\`\`
Editar el archivo .env con tus configuraciones.

4. Iniciar el servidor:
\`\`\`bash
npm run dev
\`\`\`

## Estructura del Proyecto

\`\`\`
src/
├── config/         # Configuraciones (DB, etc.)
├── controllers/    # Controladores
├── middleware/     # Middleware personalizado
├── models/        # Modelos de MongoDB
├── routes/        # Rutas de la API
├── services/      # Servicios (alertas, etc.)
├── utils/         # Utilidades
└── validators/    # Validadores
\`\`\`

## API Endpoints

### Productos

- GET /api/inventory - Obtener todos los productos
- GET /api/inventory/:id - Obtener un producto específico
- POST /api/inventory - Crear nuevo producto
- PUT /api/inventory/:id - Actualizar producto
- DELETE /api/inventory/:id - Eliminar producto

## Cronograma de Desarrollo

### Beta (4 semanas)
1. Configuración inicial (3 días)
   - Configuración del proyecto
   - Configuración de la base de datos
   - Configuración del entorno de desarrollo

2. Desarrollo del módulo de inventario (2 semanas)
   - Implementación de modelos
   - Desarrollo de endpoints CRUD
   - Implementación de validaciones

3. Sistema de alertas (1 semana)
   - Desarrollo del sistema de alertas de stock bajo
   - Implementación de logging

4. Testing y documentación (4 días)
   - Pruebas unitarias
   - Documentación del API
   - README y guías de uso

### GA (General Availability) - Próximas Características
1. Módulo de ventas (3 semanas)
   - Sistema de punto de venta
   - Gestión de transacciones
   - Reportes de ventas

2. Módulo de clientes (2 semanas)
   - Gestión de clientes
   - Sistema de fidelización
   - Historial de compras

3. Módulo de reportes (2 semanas)
   - Reportes de inventario
   - Análisis de ventas
   - Dashboards

4. Integración y mejoras (3 semanas)
   - Integración con sistemas de pago
   - Optimizaciones de rendimiento
   - Mejoras de UX/UI

## Testing

Para ejecutar las pruebas:
\`\`\`bash
npm test
\`\`\`

## Logs

Los logs se almacenan en:
- \`logs/error.log\` - Para errores
- \`logs/combined.log\` - Para todos los logs

## Soporte

Para soporte o preguntas, contactar a [correo de soporte]