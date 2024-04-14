import express from 'express'
import cors from 'cors'
import { routerApi } from './routes/index.js'
import { BoomErrorHandler, errorHandler, logErrors } from './middlewares/error.handler.js'
export const app = express()


const port = 3000
app.use(express.json())
app.use(cors())
app.get('/', (req,res) => {
    res.send('Hola!!!!!!!!')
})

routerApi(app)
app.use(logErrors)
app.use(BoomErrorHandler)
app.use(errorHandler)
app.listen(port, () => {
    console.log("Conectado!")
})
