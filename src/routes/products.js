const express = require('express');
const requireAdmin = require('../middlewares/requireAdmin');
const { createRandomCode } = require('../utils/random');
const { validateProduct } = require('../utils/validators');
const { productsDao } = require('../daos');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsDao.getById(id);
    return res.json({ id, ...product });
  } catch (err) {
    return res.json({ error: err.message });
  }
});

router.post('/', requireAdmin, async (req, res) => {
  const { error } = validateProduct(req.body);

  if (error) {
    return res.status(400).json({ error: { message: error.message } });
  }

  const { name, description, price, photo, stock } = req.body;
  const product = {
    timestamp: Date.now(),
    name,
    description,
    code: createRandomCode(),
    price,
    photo,
    stock,
  };
  try {
    const id = await productsDao.save(product);
    return res.json({ id, ...product });
  } catch (err) {
    return res.json({ error: err.message });
  }
});

router.put('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { name, description, code, price, photo, stock } = req.body;

  const { error } = validateProduct(req.body);

  if (error) {
    return res.status(400).json({ error: { message: error.message } });
  }

  try {
    const updatedProduct = await productsDao.updateById(id, {
      timestamp: Date.now(),
      name,
      description,
      code,
      price,
      photo,
      stock,
    });
    return res.json({ id, ...updatedProduct });
  } catch (err) {
    return res.json({ error: err.message });
  }
});

router.delete('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await productsDao.deleteById(id);
    return res.json({});
  } catch (err) {
    return res.json({ error: err.message });
  }
});

module.exports = router;
