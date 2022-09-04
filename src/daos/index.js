const { API } = require('../../config/config');

const ProductDAOMongoDB = require('./product/ProductDAOMongoDB');
const ProductDAOFirestore = require('./product/ProductDAOFirestore');
const CartDAOMongoDB = require('./cart/CartDAOMongoDB');
const CartDAOFirestore = require('./cart/CartDAOFirebase');

let productsDao;
let cartsDao;

switch (API.database) {
  case 'firestore':
    productsDao = new ProductDAOFirestore();
    cartsDao = new CartDAOFirestore();
    break;
  case 'mongodb':
  default:
    productsDao = new ProductDAOMongoDB();
    cartsDao = new CartDAOMongoDB();
    break;
}

module.exports = {
  productsDao,
  cartsDao,
};
