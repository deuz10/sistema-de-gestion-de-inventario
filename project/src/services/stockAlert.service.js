const Product = require('../models/Product');
const logger = require('../utils/logger');

const checkLowStock = async () => {
  try {
    const lowStockProducts = await Product.find({
      $expr: {
        $lte: ['$stock', '$minStockLevel']
      }
    });

    lowStockProducts.forEach(product => {
      logger.warn(`¡Alerta de stock bajo! Producto: ${product.name} (SKU: ${product.sku}), Stock actual: ${product.stock}`);
      // Aquí se pueden agregar notificaciones adicionales (email, SMS, etc.)
    });
  } catch (error) {
    logger.error('Error checking low stock:', error);
  }
};

exports.setupStockAlerts = () => {
  // Revisar el stock cada 6 horas
  setInterval(checkLowStock, 6 * 60 * 60 * 1000);
  
  // Primera revisión al iniciar el servidor
  checkLowStock();
};