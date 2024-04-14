const routerProducts = require("./productsRouter.js");
const routerUsers = require("./usersRouter.js");
const express = require('express')
function routerApi(app){
  const router = express.Router()
  app.use('/api/v1',router)
  router.use(routerProducts)
  router.use(routerUsers)
}

module.exports = routerApi
