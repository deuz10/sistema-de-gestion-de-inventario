const ProductService = require('../services/product.service');
const { validateProduct } = require('../validators/product.validator');
const HttpResponse = require('../utils/httpResponses');
const logger = require('../utils/logger');

exports.createProduct = async (req, res) => {
  try {
    const validationError = validateProduct(req.body);
    if (validationError) {
      return HttpResponse.badRequest(res, validationError);
    }

    const product = await ProductService.createProduct(req.body);
    return HttpResponse.created(res, product);
  } catch (error) {
    logger.error('Error creating product:', error);
    return HttpResponse.serverError(res, 'Error al crear el producto');
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    return HttpResponse.success(res, products);
  } catch (error) {
    logger.error('Error fetching products:', error);
    return HttpResponse.serverError(res, 'Error al obtener productos');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    if (!product) {
      return HttpResponse.notFound(res, 'Producto no encontrado');
    }
    return HttpResponse.success(res, product);
  } catch (error) {
    logger.error('Error fetching product:', error);
    return HttpResponse.serverError(res, 'Error al obtener el producto');
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const validationError = validateProduct(req.body);
    if (validationError) {
      return HttpResponse.badRequest(res, validationError);
    }

    const product = await ProductService.updateProduct(req.params.id, req.body);
    if (!product) {
      return HttpResponse.notFound(res, 'Producto no encontrado');
    }

    logger.info(`Product updated: ${product.sku}`);
    return HttpResponse.success(res, product);
  } catch (error) {
    logger.error('Error updating product:', error);
    return HttpResponse.serverError(res, 'Error al actualizar el producto');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await ProductService.deleteProduct(req.params.id);
    if (!product) {
      return HttpResponse.notFound(res, 'Producto no encontrado');
    }

    logger.info(`Product deleted: ${product.sku}`);
    return HttpResponse.success(res, { message: 'Producto eliminado exitosamente' });
  } catch (error) {
    logger.error('Error deleting product:', error);
    return HttpResponse.serverError(res, 'Error al eliminar el producto');
  }
};