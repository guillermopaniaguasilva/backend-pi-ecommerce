const Joi = require('joi');

const productSchema = Joi.object({
  isAdmin: Joi.boolean().optional(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  photo: Joi.string().required(),
  stock: Joi.number().required(),
  code: Joi.string().optional(),
});

const cartSchema = Joi.object({
  isAdmin: Joi.boolean().optional(),
  products: Joi.array().items(productSchema).required(),
});

const validateProduct = (product) => productSchema.validate(product);

const validateCart = (cart) => cartSchema.validate(cart);

module.exports = {
  validateProduct,
  validateCart,
};
