const express = require('express')
const cors = require('cors')
const routerApi = require( './routes/index.js')
const { BoomErrorHandler, errorHandler, logErrors } = require( './middlewares/error.handler.js')
const app = express()


const port = process.env.PORT || 3000
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
