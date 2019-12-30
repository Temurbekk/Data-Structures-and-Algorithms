class HashTable {
  //if the size is not give, it is asigned to be 53
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let SOME_PRIME = 11;
    for (let i = 0; Math.min(key.length, 100); i++) {
      let char = k[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * SOME_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //this is where separate chaining is used to push an array with key value pair into an existing array
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  //returns all the values in the hashtable
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i]; i++) {
          //handles duplicates by pushing only when array does not include the value
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  //returns all the keys in the hashtable
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i]; i++) {
          //handles duplicates by pushing only when array does not include the value
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let hashTable = new HashTable();

hashTable.set('Hashing', 'Unhashing');
