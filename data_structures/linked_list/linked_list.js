// este objeto nos permite almacer información mas compleja
// ademas, nos sirve para poder saber cual es el siguiente nodo
// en la lista.
class Nodo {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  // creamos una lista enlazada con una llave que se llama head
  // este atributo nos indica el inicio de la lista.
  constructor () {
    this.head = null
    this.length = 0
  }

  // si la lista está vacia insertamos al comienzo (cabeza),
  // sino, insertammos al final de esta.
  insert (elem) {
    // si la lista no tiene nada, creamos un nodo en la cabeza
    // de la lista.
    if (this.head === null) {
      this.head = new Nodo(elem)
      this.length++
      return
    }

    // debes recorrer todos los nodos hasta llegar al que su propiedad
    // 'next' es null, para poder agregar un nuevo elemento.
    // Para esto creamos una variable auxiliar que nos permitira navegar
    // por la lista
    let aux = this.head
    while(aux.next) {
    	aux = aux.next
    }
    // luego de que encontramos el nodo que estiene su atributo next nulo.
    // creamos un nuevo nodo y lo refernciamos al atributo next.
    aux.next = new Nodo(elem)
    this.length++
    return
  }

  // Este metodo inserta valores al comienzo de la lista.
  insertAtHead (elem) {
  	if (this.head === null) {
    	this.head = new Nodo(elem)
      this.length++
      return
    }

    const newHead = new Nodo(elem)
		newHead.next = this.head
    this.head = newHead
  }

  display () {
  	let aux = this.head
    while(aux !== null) {
    	console.log(aux.data)
      aux = aux.next
    }
  }
}


const ll = new LinkedList()

for (let i = 1; i < 20; i++) {
	// ll.insert(i)
  ll.insertAtHead(i)
}
ll.display()
