const _ = require('lodash');

class MongoDBContainer {
  constructor(model) {
    this.model = model;
  }

  async save(document) {
    try {
      const result = await this.model.insertMany(document);
      return result[0]._id;
    } catch (error) {
      throw new Error('An error occurred while saving the document.');
    }
  }

  async getById(id) {
    try {
      const document = await this.model.findById(id);
      return _.omit(document.toObject(), ['_id', '__v']);
    } catch (error) {
      throw new Error('An error occurred while fetching the document.');
    }
  }

  async getAll() {
    try {
      const documents = await this.model.find();
      return documents;
    } catch (error) {
      throw new Error('An error occurred while fetching the documents.');
    }
  }

  async updateById(id, document) {
    try {
      const updatedDocument = await this.model.findByIdAndUpdate(id, document);
      return _.omit(updatedDocument.toObject(), ['_id', '__v']);
    } catch (error) {
      throw new Error('An error occurred while updating the document.');
    }
  }

  async deleteById(id) {
    try {
      await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('An error occurred while deleting the document.');
    }
  }

  async deleteAll() {
    try {
      await this.model.deleteMany();
    } catch (error) {
      throw new Error('An error occurred while deleting all documents.');
    }
  }
}

module.exports = MongoDBContainer;
