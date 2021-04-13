export default class Archivo {
  constructor(usuarios = []) {
    this.filepath = './archivos/usuarios.txt'
    this.usuarios = usuarios
  }

  leer() {
    try {
      return this.usuarios
    } catch (err) {
      console.log('ups, algo paso, err')
    }
  }

  guardar(title, price, thumbnail) {
    try {
      const nuevoUsuario = {
        id: this.usuarios.length + 1,
        title: title,
        price: price,
        thumbnail: thumbnail,
      }
      this.usuarios.push(nuevoUsuario)
      console.log(`usuario con id ${nuevoUsuario.id} creado`)
      return this.usuarios
    } catch (err) {
      console.log('Ups, algo paso', err)
    }
  }

  borrar() {
    this.usuarios = []
  }
}
