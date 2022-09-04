const express = require('express');
const _ = require('lodash');
const { validateCart } = require('../utils/validators');
const { cartsDao } = require('../daos');

const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validateCart(req.body);

  if (error) {
    return res.status(400).json({ error: { message: error.message } });
  }

  const { products } = req.body;
  try {
    const id = await cartsDao.save({
      timestamp: Date.now(),
      products,
    });
    return res.json({ cartId: id });
  } catch (err) {
    return res.json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await cartsDao.deleteById(id);
    return res.json({});
  } catch (err) {
    return res.json({ error: err.message });
  }
});

router.get('/:id/products', async (req, res) => {
  const { id } = req.params;
  let cart;

  try {
    cart = await cartsDao.getById(id);
  } catch (err) {
    return res.json({ error: err.message });
  }

  return res.json({ products: cart.products });
});

router.post('/:id/products', async (req, res) => {
  const { id } = req.params;
  const { products } = req.body;
  let cart;

  try {
    cart = await cartsDao.getById(id);
  } catch (err) {
    return res.json({ error: err.message });
  }

  const updatedProducts = _.union(cart.products, products);
  cart = { ...cart, products: updatedProducts };

  try {
    await cartsDao.updateById(id, cart);
    return res.json(cart);
  } catch (err) {
    return res.json({ error: err.message });
  }
});

router.delete('/:id/products/:productId', async (req, res) => {
  const { id, productId } = req.params;
  let cart;

  try {
    cart = await cartsDao.getById(id);
  } catch (err) {
    return res.json({ error: err.message });
  }

  cart.products = cart.products.filter((product) => product.id !== productId);

  try {
    cart = await cartsDao.updateById(id, cart);
    return res.json(cart);
  } catch (err) {
    return res.json({ error: err.message });
  }
});

module.exports = router;
