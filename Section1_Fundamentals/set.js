// Implement a Set from scratch without built-in JS methods (Functional)

function main() {
    let set = createSet();
    console.log(set);            // shows API object with methods
    console.log(set.add(10));    // true (added)
    console.log(set.add(10));    // false (duplicate)
    console.log(set.add(20));    // true
    console.log(set.values());   // [10, 20]
    console.log(set.remove(30)); // false (not found)
    console.log(set.remove(10)); // true (removed)
    console.log(set.values());   // [20]
    console.log(set.has(10));    // false
    console.log(set.has(20));    // true
    console.log(set.size());     // 1
}

// Factory function creates a new Set instance
function createSet() {
    // private array to store elements
    let items = [];

    // add element if not present
    function add(value) {
        // loop through array
        for (let i = 0; i < items.length; i++) {
            // check for equality
            if (items[i] === value) {
                return false;
            }
        }
        // push value to array
        items.push(value);
        return true;
    }

    // remove element if present
    function remove(value) {
        for (let i = 0; i < items.length; i++) {
            if (items[i] === value) {
                // (i, 1) -> current index, 1 item
                items.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    // check if element exists
    function has(value) {
        for (let i = 0; i < items.length; i++) {
            if (items[i] === value) {
                return true;
            }
        }
        return false;
    }

    // number of stored elements
    function size() {
        return items.length;
    }

    // copy of all stored elements 
    function values() {
        return [...items];
    }

    // expose the public API (if key:value are named the same, we can shorten it)
    return {add, remove, has, size, values}
}

main();