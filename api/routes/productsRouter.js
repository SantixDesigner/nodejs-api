
import e from "express";
import { validatorHandler } from "../middlewares/validator.handler.js";
import { createProductSchema, updateProductSchema, getProductSchema } from "../schemas/product.schema.js";
import ProductService from '../services/product.services.js';
export const routerProducts = e.Router()
const service = new ProductService()
routerProducts.get('/products', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

routerProducts.get('/products/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id
      const producto = await service.findOne(id)
      res.json(producto)
    }
    catch (err) {
      next(err)
    }
  })

routerProducts.post('/products', async (req, res) => {
  const body = req.body
  const newProduct = await service.create(body)
  res.json(newProduct)
})

routerProducts.patch('/products/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = req.params.id
      const body = req.body
      const product = await service.update(id, body)
      res.json(product)
    }
    catch (err) {
      next(err)
    }
  })

routerProducts.delete('/products/:id', async (req, res) => {
  const id = req.params.id
  const product = await service.delete(id)
  res.json(product)
})
