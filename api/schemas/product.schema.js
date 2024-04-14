const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10).max(4000)

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  id: id.required()
})

const updateProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  id: id
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
}
