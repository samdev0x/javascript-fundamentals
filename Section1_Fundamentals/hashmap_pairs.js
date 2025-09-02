// Create minimal hashmap with arrays. (List of pairs)


function main() {
    let map = createMap();

    set(map, "apple", 10);
    set(map, "banana", 20);

    console.log(get(map, "apple"));   // → 10
    console.log(get(map, "banana"));  // → 20
    console.log(get(map, "pear"));    // → null

    console.log(has(map, "apple"));   // → true
    console.log(has(map, "pear"));    // → false

    remove(map, "apple");
    console.log(has(map, "apple"));   // → false

    console.log(keys(map));           // → ["banana"]
    console.log(values(map));         // → [20]


}

// helper function to create an empty map
function createMap() {
    return [];
}

// add or update pair. Returns nothing
function set(map, key, value) {
    for(let i = 0; i < map.length; i++) {
        if(map[i][0] === key) {
            map[i][1] = value;
            return;
        }
    }
    map.push([key, value]);
}

// return value if key exists otherwise null
function get(map, key) {
    for(let i = 0; i < map.length; i++) {
        if(map[i][0] === key) {
            return map[i][1];
        }
    }
    return null;
}

// remove value if key exists otherwise null
function remove(map, key) {
    for(let i = 0; i < map.length; i++) {
        if(map[i][0] === key) {
            const removedValue = map[i];
            map.splice(i, 1);
            return removedValue;
        }
    }
    return null;
}

// check if key exists, return true or false
function has(map, key) {
    for(let i = 0; i < map.length; i++) {
        if(map[i][0] === key) {
            return true;
        }
    }
    return false;
}

// return an array of all keys
function keys(map) {
    let result = [];
    for(let i = 0; i < map.length; i++) {
        result.push(map[i][0]);
    }
    return result;
}

// return an array of all values
function values(map) {
    let result = [];
    for(let i = 0; i < map.length; i++) {
        result.push(map[i][1]);
    }
    return result;
}

main();