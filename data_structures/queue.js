// Implement a queue with enqueue, dequeue, front, size and isEmpty functions.

let queue = [];

function main() {
    enqueue("Alice");
    console.log(inspect());     // ["Alice"]

    enqueue("Bob");
    console.log(inspect());     // ["Alice", "Bob"]

    console.log(dequeue());     // "Alice"
    console.log(inspect());     // ["Bob"]

    console.log(front());       // "Bob"

    enqueue("Carol");
    console.log(inspect());     // ["Bob", "Carol"]

    console.log(size());        // 2

    console.log(dequeue());     // "Bob"
    console.log(dequeue());     // "Carol"
    console.log(dequeue());     // null (empty)
    console.log(front());       // null (empty)

    console.log(isEmpty());     // true
}

function enqueue(value) {
    queue.push(value);
}

function dequeue() {
    if (queue.length === 0) return null;
    return queue.shift();
}   

function front() {
    if (queue.length === 0) return null;
    return queue[0];
}

function size() {
    return queue.length;
}

function isEmpty() {
    return queue.length === 0;
    
}

function inspect() {
    return [...queue];
}

main();