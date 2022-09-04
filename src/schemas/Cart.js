const mongoose = require('mongoose');

const { SchemaTypes } = mongoose;

const cartSchema = new mongoose.Schema({
  timestamp: SchemaTypes.Date,
  products: {
    type: SchemaTypes.Array,
    ref: 'Product',
  },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
