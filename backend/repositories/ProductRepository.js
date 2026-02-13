const Product = require('../models/Product');

class ProductRepository {
  async findAll() {
    return await Product.findAll();
  }

  async findById(id) {
    return await Product.findByPk(id);
  }

  async create(productData) {
    return await Product.create(productData);
  }

  async update(id, productData) {
    const product = await Product.findByPk(id);
    if (product) {
      return await product.update(productData);
    }
    return null;
  }

  async delete(id) {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new ProductRepository();