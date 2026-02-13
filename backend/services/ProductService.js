const productRepository = require('../repositories/ProductRepository');

class ProductService {
  async getAllProducts() {
    return await productRepository.findAll();
  }

  async getProductById(id) {
    return await productRepository.findById(id);
  }

  async createProduct(productData) {
    return await productRepository.create(productData);
  }

  async updateProduct(id, productData) {
    return await productRepository.update(id, productData);
  }

  async deleteProduct(id) {
    return await productRepository.delete(id);
  }
}

module.exports = new ProductService();