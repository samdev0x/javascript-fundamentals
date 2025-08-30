// Implement a queue with enqueue, dequeue, front, size and isEmpty functions.

function main() {
    console.log(enqueue("Alice"));
    console.log(enqueue("Bob"));
    console.log(dequeue());
    console.log(size());
    console.log(front());
    console.log(enqueue("Carol"));
    console.log(dequeue());
    console.log(dequeue());
    console.log(dequeue());
    console.log(isEmpty());
}

let queue = [];

function enqueue(value) {
    queue.push(value);
    return [...queue];
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

main();
