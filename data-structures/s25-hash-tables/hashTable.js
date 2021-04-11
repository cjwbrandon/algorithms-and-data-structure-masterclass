class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let total = 0,
      WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.size;
    }
    return total;
  }

  set(key, value) {
    const hash = this._hash(key);

    // TODO: Handle duplicate keys
    this.keyMap[hash]
      ? this.keyMap[hash].push([key, value])
      : (this.keyMap[hash] = [[key, value]]);
  }

  get(key) {
    const hash = this._hash(key);

    if (!this.keyMap[hash]) return undefined;
    for (const [k, v] of this.keyMap[hash]) {
      if (k === key) return v;
    }
  }

  values() {
    const valuesArr = [];

    for (const obj of this.keyMap) {
      if (obj) {
        for (const [_, v] of obj) {
          if (!valuesArr.includes(v)) valuesArr.push(v);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    const keysArr = [];

    for (const obj of this.keyMap) {
      if (obj) {
        for (const [k, _] of obj) {
          // TODO: Once duplicate keys is handled, don't need this condition
          if (!keysArr.includes(k)) keysArr.push(k);
        }
      }
    }
    return keysArr;
  }
}

const hashTable = new HashTable();
hashTable.set("red", "abc");
console.log(hashTable.keyMap);
console.log(hashTable.get("red"));
console.log(hashTable.keys());
console.log(hashTable.values());
