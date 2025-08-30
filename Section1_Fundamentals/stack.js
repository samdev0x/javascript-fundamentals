// Implement a List with push, pop and peek functions.
let array = [];

function main() {
    console.log(push(1));
    console.log(push(2));
    console.log(push(3));
    console.log(pop());
    console.log(pop());
    console.log(peek());
}
// push a value into the array into the last position
function push(x) {
    array.push(x)
    return [...array];
}
// remove the last value of the array
function pop() {
    array.pop()
    return [...array];
}
// just return the last value of the array
function peek() {
    return array[array.length - 1];
}
    
main();