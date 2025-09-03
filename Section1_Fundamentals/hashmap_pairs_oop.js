// (OOP) Create minimal hashmap with arrays. (List of pairs) 

class PairsMap  {
    constructor() {
        this.map = [];
    }

    set(key, value) {
        for(let i = 0; i < this.map.length; i++) {
            if(this.map[i][0] === key) {
                this.map[i][1] = value;
                return;
            }
        }
        this.map.push([key, value]);
    }

    get(key) {
        for(let i = 0; i < this.map.length; i++) {
            if(this.map[i][0] === key) {
                return this.map[i][1];
            }
        }
        return null;
    }

    remove(key) {
        for(let i = 0; i < this.map.length; i++) {
            if(this.map[i][0] === key) {
                const removedValue = this.map[i];
                this.map.splice(i, 1);
                return removedValue;
            }
        }
        return null;     
    }

    has(key) {
        for(let i = 0; i < this.map.length; i++) {
            if(this.map[i][0] === key) {
                return true;
            }
        }
        return false;
    }

    keys() {
        let result = [];
        for(let i = 0; i < this.map.length; i++) {
            result.push(this.map[i][0]);
        }
        return result;
    }

    values() {
        let result = [];
        for(let i = 0; i < this.map.length; i++) {
            result.push(this.map[i][1]);
        }
        return result;
    }

    size() {
        return this.map.length;
    }

    inspect() {
        return [...this.map];
    }
}

function main() {
    const map = new PairsMap();
    map.set("apple", 10);
    map.set("banana", 20);
    map.set("banana", 30);
    map.set("orange", 50);
    console.log(map.get("apple"));      // → 10
    console.log(map.get("pear"));       // → null
    console.log(map.has("banana"));     // → true
    console.log(map.remove("banana"));  // → [ 'banana', 30 ]
    console.log(map.has("banana"));     // → false
    console.log(map.keys());            // → [ 'apple', 'orange' ]
    console.log(map.values());          // → [ 10, 50 ]
    console.log(map.size());            // → 2
    console.log(map.inspect());         // → [ [ 'apple', 10 ], [ 'orange', 50 ] ]
}

main();