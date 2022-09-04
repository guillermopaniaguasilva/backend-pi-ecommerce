const FirestoreContainer = require('../../containers/FirestoreContainer');

class ProductDAOFirestore extends FirestoreContainer {
  constructor() {
    super('products');
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
}

module.exports = ProductDAOFirestore;
