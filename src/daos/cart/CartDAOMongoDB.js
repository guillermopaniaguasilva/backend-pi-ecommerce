const MongoDBContainer = require('../../containers/MongoDBContainer');
const Cart = require('../../schemas/Cart');

class CartDAOMongoDB extends MongoDBContainer {
  constructor() {
    super(Cart);
  }

  async save(document) {
    return super.save(document);
  }

  async getById(id) {
    return super.getById(id);
  }

  async getAll() {
    return super.getAll();
  }

  async updateById(id, document) {
    return super.updateById(id, document);
  }

  async deleteById(id) {
    return super.deleteById(id);
  }

  async deleteAll() {
    return super.deleteAll();
  }
}

module.exports = CartDAOMongoDB;
