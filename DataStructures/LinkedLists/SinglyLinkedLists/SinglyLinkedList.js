class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //Add to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //Removes from the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //Removes from the front of the list
  shift() {
    if (!this.head) return undefined;
    let newHead = this.head;
    this.head = newHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return newHead;
  }
  //Adds to the front of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //This method allows you to access the node at a given index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    let counter = 0;
    while (counter !== index && node.next) {
      node = node.next;
      counter++;
    }
    return node;
  }
  //This method allows you to set the node's value at a given index to something else
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //This method will insert a passed node at a given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    //!! nots it twice(first it falses it and then trues it)
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let current = prev.next;
    newNode.next = current;
    prev.next = newNode;
    this.length++;

    return true;
  }
  //This method will remove a node from a given index
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;

    return removed;
  }
  //This method will reverse the linked list
  reverse() {
    let prev = null;
    let next;
    let current = this.head;
    this.head = this.tail;
    this.tail = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = current.next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('there');
list.push('!');
list.push('How');
list.push('you');
list.push('?');
list.pop();
list.insert(4, 'are'); //Insert 'are' after 'How' and before 'you'
list.remove(6); //Remove '?'
list.reverse();
