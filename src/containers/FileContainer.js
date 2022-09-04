const fs = require('fs');

class FileContainer {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async _getFileContent() {
    return JSON.parse(
      await fs.promises.readFile(this.filePath, {
        encoding: 'utf-8',
      })
    );
  }

  async _exists(id) {
    const currentFileContent = await this._getFileContent();
    return currentFileContent.find((object) => object.id === id);
  }

  async save(object) {
    try {
      const currentFileContent = await this._getFileContent();
      const id = currentFileContent.length + 1;
      currentFileContent.push({ id, ...object });
      const newFileContent = JSON.stringify(currentFileContent);
      await fs.promises.writeFile(this.filePath, newFileContent);
      return id;
    } catch (error) {
      throw new Error('An error occurred while saving the object.');
    }
  }

  async getById(id) {
    let currentFileContent;
    try {
      currentFileContent = await this._getFileContent();
    } catch (error) {
      throw new Error('An error occurred while fetching the objects.');
    }
    const object = currentFileContent.find((obj) => obj.id === id);
    if (!object) throw new Error(`Object with id ${id} was not found.`);
    return object;
  }

  async getAll() {
    try {
      return await this._getFileContent();
    } catch (error) {
      throw new Error('An error occurred while fetching the objects.');
    }
  }

  async updateById(id, object) {
    const currentFileContent = await this._getFileContent();
    const exists = await this._exists(id);
    if (!exists) {
      throw new Error(`Object with id ${id} does not exist.`);
    }
    const updatedObject = { id, ...object };
    let newFileContent = currentFileContent.filter(
      (product) => product.id !== id
    );
    newFileContent.push(updatedObject);
    newFileContent = JSON.stringify(newFileContent);
    try {
      await fs.promises.writeFile(this.filePath, newFileContent);
    } catch (error) {
      throw new Error('An error occurred while updating the object.');
    }
    return updatedObject;
  }

  async deleteById(id) {
    const currentFileContent = await this._getFileContent();
    const exists = await this._exists(id);
    if (!exists) {
      throw new Error(`Object with id ${id} does not exist.`);
    }
    const newFileContent = JSON.stringify(
      currentFileContent.filter((object) => object.id !== id)
    );
    try {
      await fs.promises.writeFile(this.filePath, newFileContent);
    } catch (error) {
      throw new Error('An error occurred while deleting the object.');
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify([]));
    } catch (error) {
      throw new Error('An error occurred while deleting all objects.');
    }
  }
}

module.exports = FileContainer;
