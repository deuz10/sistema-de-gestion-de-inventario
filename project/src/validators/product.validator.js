exports.validateProduct = (product) => {
  const errors = [];

  if (!product.sku) errors.push('SKU es requerido');
  if (!product.name) errors.push('Nombre es requerido');
  if (!product.description) errors.push('Descripción es requerida');
  if (!product.category) errors.push('Categoría es requerida');
  if (!product.price || product.price <= 0) errors.push('Precio debe ser mayor a 0');
  if (typeof product.stock !== 'number' || product.stock < 0) {
    errors.push('Stock debe ser un número no negativo');
  }
  if (typeof product.minStockLevel !== 'number' || product.minStockLevel < 0) {
    errors.push('Nivel mínimo de stock debe ser un número no negativo');
  }

  return errors.length > 0 ? errors.join(', ') : null;
};