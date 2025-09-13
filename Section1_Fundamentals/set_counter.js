// Example: Simple counter using a factory function
// Demonstrates closures, private state, and exposing an API

function main() {
    // Create a new counter object from the factory
    let count = new createCounter();

    // Use the exposed API methods
    console.log(count.add());   // increments count, returns new value
    console.log(count.show());  // shows current value
}

// Factory function
function createCounter() {
    // Private variable: only visible inside createCounter
    // It cannot be accessed directly from outside code
    let count = 0;

    // Internal functions: Only these functions can read/modify the private variable
    function add() {
        return ++count;
    }

    function remove() {
        return count--;
    }

    function show() {
        return count;
    }

    // Return the "public API": an object that exposes the functions
    // Keys are the external method names (count.add, count.remove, count.show)
    // Values are the internal functions defined above
    return {
        add: add,
        remove: remove,
        show: show,
    }
}

main();