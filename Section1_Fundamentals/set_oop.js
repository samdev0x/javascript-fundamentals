// Implement a Set from scratch without built-in JS methods (OOP)

class SetX {
    constructor() {
        // store elements in an array
        this.items = [];
    }

    // add element if not present
    add(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value) {
                return false;
            }
        }
        this.items.push(value);
        return true;
    }
 
    // remove element if present
    remove(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value) {
                this.items.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    // check if element exists
    has(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value){
                return true;
            }
        }
        return false;
    }

    // number of stored elements
    size() {
        return this.items.length;
    }

    // return copy of all stored elements
    values() {
        return [...this.items];
    }
}


function main() {
    let set = new SetX();
    console.log(set);            // shows instance with items array
    console.log(set.add(10));    // true
    console.log(set.add(10));    // false
    console.log(set.add(20));    // true
    console.log(set.values());   // [10, 20]
    console.log(set.remove(30)); // false
    console.log(set.remove(10)); // true
    console.log(set.values());   // [20]
    console.log(set.has(10));    // false
    console.log(set.has(20));    // true
    console.log(set.size());     // 1
}

main();