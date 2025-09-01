// Create a List with OOP

class Stack {
    constructor() {
        this._data = [];
    }

    push(value) {
        this._data.push(value);
    }

    pop() {
        if (this._data.length === 0) return null;
        return this._data.pop();
    }

    peek() {
        if (this._data.length === 0) return null;
        return this._data[this._data.length - 1];
    }

    size() {
        return this._data.length;
    }

    isEmpty() {
        return this._data.length === 0;
    }

    inspect() {
        return [...this._data];
    }
}

function main() {
    const newClass = new Stack();
    newClass.push(1);
    newClass.push(2);
    console.log(newClass.inspect());
    console.log(newClass.peek());
    console.log(newClass.pop());
    console.log(newClass.inspect());
    console.log(newClass.isEmpty());
}

main();