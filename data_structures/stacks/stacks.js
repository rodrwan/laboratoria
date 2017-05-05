class Stack {
	constructor () {
		this.items = []
		this.length = 0
	}

	push (item) {
		this.items[this.length] = item
		this.length++
	}

	pop () {
		this.items.pop()
		this.length--
	}

	top () {
		return this.items[this.length-1]
  }

	isEmpty () {
		return this.length === 0
	}
}

