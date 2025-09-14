// Create a queue with OOP

class Queue {
    constructor() {
        this._data = [];
    }

    enqueue(value) {
        this._data.push(value);
    }

    dequeue() {
        if (this._data.length ===0) return null;
        return this._data.shift();
    }

    front() {
        if (this._data.length === 0) return null;
        return this._data[0];
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
    const queue1 = new Queue();
    queue1.enqueue("Alice");
    console.log(queue1.inspect());
    queue1.enqueue("Bob");
    console.log(queue1.inspect());
    console.log(queue1.dequeue());
    console.log(queue1.inspect());
    console.log(queue1.front());
    queue1.enqueue("Carol");
    console.log(queue1.inspect());
    console.log(queue1.size());
    console.log(queue1.dequeue());
    console.log(queue1.dequeue());
    console.log(queue1.dequeue());
    console.log(queue1.front());
    console.log(queue1.isEmpty());
}

main();