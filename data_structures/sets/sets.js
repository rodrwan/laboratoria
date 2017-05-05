class MySet {
  constructor () {
    this.items = {}
  }

  has (value) {
    return this.items.hasOwnProperty(value)
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

  add (value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }

    return false
  }

  delete (value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }

    return false
  }

  clear () {
    this.items = {}
  }

  size () {
    return Object.keys(this.items).length
  }

  print () {
    for (let key in this.items) {
      console.log(this.items[key])
    }
  }
}

const s1 = new MySet()

s1.add(1)
s1.add(2)
s1.add(3)

const s2 = new MySet()

s2.add(1)
s2.add(5)
s2.add(6)

function union (s1, s2) {
  const s3 = new MySet()
  for (let i in s1.items) {
    s3.add(s1.items[i])
  }
  for (let i in s2.items) {
    s3.add(s2.items[i])
  }
  s3.print()
}

union(s1, s2)
