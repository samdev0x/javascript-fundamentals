// Create a List with push, pop, peek, including guardrails for empty cases

let array = [];

function main() {
    push(1);
    push(2);
    push(3);
    console.log(array);
    pop();
    console.log(array);
    console.log(peek());
    console.log(inspect());
    pop();
    console.log(inspect());
}

function push(value) {
    array.push(value);
}

function pop() {
    if (array.length === 0) return null;
    return array.pop();
}

function peek() {
    if (array.length === 0) return null;
    return array[array.length - 1];
}

function inspect() {
    return [...array];
}

main();