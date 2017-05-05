class Dictionary {
  constructor () {
    this.items = {}
  }

  has (key) { // -> hasOwnProperty
    return this.items.hasOwnProperty(key)
  }

  // forma iterativa para saber si una llave existe.
  has2 (key) {
    for (let k in this.items) {
      if (k === key) {
        return true
      }
    }

    return false
  }

  set (key, value) {
    this.items[key] = value
  }

  remove (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }

  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }

  print () {
    for (let key in this.items) {
      console.log(`key: ${key} -> ${this.items[key]}`)
    }
  }
}

const dict = new Dictionary()

dict.set('Gandalf', 'gandalf@email.com')
dict.set('John', 'johnsnowf@email.com')
dict.set('Tyrion', 'tyrion@email.com')

dict.print()
// TDA diccionario
//
// has(key): identifica si la llave dada existen en el diccionario.
// set(key, value): añade un nuevo elemento de la forma [llave, valor] en un objeto literal
