const admin = require('../services/firestore/firestore');

class FirestoreContainer {
  constructor(collection) {
    this.db = admin.firestore();
    this.query = this.db.collection(collection);
  }

  async save(document) {
    try {
      const doc = this.query.doc();
      await doc.create(document);
      return doc.id;
    } catch (error) {
      console.log(error);
      throw new Error('An error occurred while saving the document.');
    }
  }

  async getById(id) {
    try {
      const doc = this.query.doc(id);
      const item = await doc.get();
      const response = item.data();
      return { id: doc.id, ...response };
    } catch (error) {
      throw new Error('An error occurred while fetching the document.');
    }
  }

  async updateById(id, document) {
    try {
      const doc = this.query.doc(id);
      await doc.update(document);
      return { id, ...document };
    } catch (error) {
      throw new Error('An error occurred while updating the document.');
    }
  }

  async deleteById(id) {
    try {
      const doc = this.query.doc(id);
      const item = await doc.delete();
      return item;
    } catch (error) {
      throw new Error('An error occurred while deleting the document.');
    }
  }
}

module.exports = FirestoreContainer;
