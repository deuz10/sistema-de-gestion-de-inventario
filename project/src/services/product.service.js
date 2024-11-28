const Product = require('../models/Product');
const logger = require('../utils/logger');

class ProductService {
  static async createProduct(productData) {
    const product = new Product(productData);
    await product.save();
    logger.info(`New product created: ${product.sku}`);
    return product;
  }

  static async getAllProducts() {
    return await Product.find();
  }

  static async getProductById(id) {
    return await Product.findById(id);
  }

  static async updateProduct(id, productData) {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
  }

  static async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = ProductService;