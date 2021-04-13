import express from 'express'
import Archivo from './module.js'
//inicializar instancia de clase
const productos = new Archivo()
///////
const app = express()

const port = 8080
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routing
app.get('/api/productos', (req, res) => {
  const items = productos.leer()
  if (items.length === 0) {
    return res.status(404).send('{error: no hay productos cargados}')
  }
  console.log(`req received in route "/api/productos"`)
  res.status(200).send(items)
})

app.get('/api/productos/:id', (req, res) => {
  const { id } = req.params
  const items = productos.leer()
  const response = items.filter((item) => item.id == id)
  if (response.length !== 0) {
    console.log(`req received in route "/api/productos/${id}"`)
    return res.status(200).send(response)
  }
  console.log('the user passed an invalid id')
  res.status(404).send('{error: producto no encontrado}')
})

app.post('/api/productos', (req, res) => {
  const { title, price, thumbnail } = req.body
  productos.guardar(title, price, thumbnail)
  res.status(200).send(`post request succesfully created`)
})

app.listen(port, () => {
  console.log(`http server listening on port ${port}`)
})

app.on('error', (error) => console.log(`error: ${error.message}`))
