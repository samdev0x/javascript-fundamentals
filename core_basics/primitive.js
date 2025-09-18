// Implement small experiments to see how primitives and objects
// behave differently when copied or mutated

function main() {
    console.log(primitiveCopyTest());
    console.log(objectCopyTest());
}

function primitiveCopyTest() {
    // Declare a variable and assign a value
    let number = 10;

    // Declare a second variable and assign the original variable's value to it
    let numberCopy = number;

    // Mutate the original variable's value and assign it back to the same variable
    number = number + 5;

    // Return both variables to see the difference
    return {number, numberCopy};
}

function objectCopyTest() {
    // Make an object with a property
    const obj = { a: 1 };
    
    // Assign it to another variable (this is a reference, not a copy)
    let obj2 = obj;

    // Mutate the original object value
    obj.a = 2;
    obj.b = 1;
    obj.person = "John";
    obj.car = "Toyota";

    // Create a copy of the object
    let obj3 = { ...obj };
    obj.b = 99;

    // Return all 3 to compare (obj = original, obj2 = reference, obj3 = copy)
    return {obj, obj2, obj3};
}

main();