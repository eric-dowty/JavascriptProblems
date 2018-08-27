var exports = module.exports={};

exports.Node = class Node {
  constructor(next, value) {
    this.next = next || null;
    this.value = value || null;
  }
};

exports.LinkedList = class LinkedList {
  constructor(head) {
    this.head = head || null;
    this.current = this.head;
  }

  tail() {
    var tail;

    this._traverseNodes(function() {
      if(this.current.next == null) {
        tail = this.current;
      }
    }.bind(this));

    return tail;
  }

  length() {
    return this.isEmpty() ? 0 : this._countNodes();
  }

  isEmpty() {
    return this.head ? false : true;
  }

  values() {
    var val = [];

    this._traverseNodes(function() {
      val.push(this.current.value)
    }.bind(this));

    return val;
  }

  nodeAt(index) {
    var node = null;
    var counter = 0;

    this._traverseNodes(function() {
      if(counter == index) {
        node = this.current;
      }
      counter++;
    }.bind(this));

    return node;
  }

  insertAt(index, node) {
    var counter = 0;

    if(index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      this._traverseNodes(function() {
        if (counter == index-1) {
          node.next = this.current.next;
          this.current.next = node;
        }
        counter++
      }.bind(this));
    }
  }

  deleteAt(index) {
    var counter = 0;

    if (index == 0) {
      this.head = this.head.next;
    } else {
      this._traverseNodes(function() {
        if (counter == index-1) {
          this.current.next = this.current.next.next;
        }
        counter++
      }.bind(this));
    }
  }

  _traverseNodes(func) {
    this.current = this.head;

    while(this.current != null) {
      func && func();
      this.current = this.current.next;
    };
  }

  _countNodes() {
    var counter = 0;

    this._traverseNodes(function() { counter++ }.bind(this));

    return counter;
  }
};