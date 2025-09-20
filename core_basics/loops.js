// Loops practice

function main() {
    let arr = [5, 5, 5];
    let obj = { name: "John", age: 25 };
    let int = 5;
    console.log(whileCounter(int));
    console.log(doWhileCounter(int));
    console.log(iterateArray(arr));
    console.log(iterateObject(obj));
    console.log(sumArray(arr));
}

function whileCounter(limit) {
    let arr = [];
    let counter = 0;

    // while loops -> checks the condition before running. Might never run.
    while (counter < limit) {
        arr.push(counter);
        counter++;
    }
    return arr;
}

function doWhileCounter(limit) {
    let arr = [];
    let counter = 0;

    // do...while loops -> runs the loop body once no matter what, then checks the condition to decide if it should run again.
    do {
        arr.push(counter);
        counter++;
    } while (counter < limit);

    return arr;
}

function sumArray(arr) {
    let sum = 0;

    // for loops -> same behavior as while loops but more compact
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;   
}

function iterateArray(arr) {
    let array = [];

    // for...of loops -> iterates directly over array values
    for (let value of arr) {
        // process each value
        array.push(value*2);
    }
    return array;
}

function iterateObject(obj) {
    let array = [];

    // for...in loops -> iterates over keys of an object
    for (const key in obj) {
        // collect keys. To collect values, we can use array.push(obj[key])
        array.push(key);
    }
    return array;
}


main();