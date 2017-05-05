class Queue {
	constructor () {
		this.items = []
		this.length = 0
	}

	enqueue (item) {
		this.items[this.length] = item
		this.length++
	}

	dequeue () {
		this.items.shift()
		this.length--
	}

	front () {
		return this.items[0]
	}

	back () {
		return this.items[this.length-1]
	}

	isEmpty () {
		return this.length === 0
	}
}
