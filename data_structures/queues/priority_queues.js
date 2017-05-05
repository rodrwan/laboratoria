class Dato {
	constructor (data) {
		this.data = data
		// prioridad de 1 a 10.
		this.priority = Math.floor(Math.random() * 10 + 1)
	}
}

class Queue {
	constructor () {
		this.items = []
		this.length = 0
	}

	enqueue (data) {
		this.items[this.length] = data
		this.length++

		this.items.sort((a,b) => {
			return b.priority - a.priority
		})
	}

	dequeue () {
		return this.items.shift()
	}
}

const q = new Queue()

for (let i = 0; i < 10; i++) {
	const d = new Dato(i)
  q.enqueue(d)
}

let text = ''
for (let i = 0; i < 10; i++) {
	text += 'Dato: ' + q.items[i].data + ', prioridad: ' + q.items[i].priority + '<br/>'
}
document.getElementById('result').innerHTML = text
