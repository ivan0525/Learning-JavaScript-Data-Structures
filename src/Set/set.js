class Set {
  constructor() {
    this.items = {};
  }

  has (element) {
    // return element in items
    return Object.prototype.hasOwnProperty.call(element);
  }

  add (element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false;
  }

  clear () {
    this.items = {};
  }
}
