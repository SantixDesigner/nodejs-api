import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10).max(4000)

export const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  id: id.required()
})

export const updateProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  id: id
})

export const getProductSchema = Joi.object({
  id: id.required()
})
