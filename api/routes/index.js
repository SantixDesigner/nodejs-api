import {routerProducts} from "./productsRouter.js";
import {routerUsers} from "./usersRouter.js";
import express from 'express'
export function routerApi(app){
  const router = express.Router()
  app.use('/api/v1',router)
  router.use(routerProducts)
  router.use(routerUsers)
}
