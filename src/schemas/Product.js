const mongoose = require('mongoose');

const { SchemaTypes } = mongoose;

const productSchema = new mongoose.Schema({
  timestamp: SchemaTypes.Date,
  name: SchemaTypes.String,
  description: SchemaTypes.String,
  code: SchemaTypes.String,
  price: SchemaTypes.Number,
  photo: SchemaTypes.String,
  stock: SchemaTypes.Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
