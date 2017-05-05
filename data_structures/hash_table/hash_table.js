
class HashTable {
  constructor(fn) {
    this.table = []
    this.hashFn = fn
  }

  put (key, value) {
    const pos = this.hashFn(key)
    console.log(`key: ${key} -> ${pos}`)
    this.table[pos] = value
  }

  get (key) {
    return this.table[this.hashFn(key)]
  }
}

const firstHashFn = (key) => {
  // .....
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }

  return hash % 20
}

const ht = new HashTable(firstHashFn)

ht.put('Gandalf', 'gandalf@email.com')
ht.put('fladnaG', 'colision@email.com')
const elem = ht.get('Gandalf')
console.log(elem)
const elem1 = ht.get('fladnaG')
console.log(elem1)

