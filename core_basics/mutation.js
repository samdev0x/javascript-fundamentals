// Mutation vs Reassignment

function main() {
    console.log(arrayMutationTest());
    console.log(objectAliasAndCopy());
    console.log(stringReassignTest());
    console.log(arrayOfObjectsTest());
}

function arrayMutationTest() {
    // Initialize an array
    let arr1 = [1, 2, 3];

    // Initialize a second array that points to the first array
    let arr2 = arr1;

    // Push a new value to the first array, both are now updated as both point to the same array
    arr1.push(4);

    // Reassign a new value to the first array, now 'arr1' points to a new array
    arr1 = [9, 9, 9];

    // Return both to compare
    return { arr1, arr2 };
}

function objectAliasAndCopy() {
    // Initialize an object
    let obj = { a: 1, nested: { x: 10 } };

    // Alias: points to the same object inmemory as 'obj'
    let alias = obj;

    // Shallow copy: new top-level object, nested objects are still shared references
    let copy = { ...obj };

    // Top-level mutation affects obj and alias; copy.a stays 1
    obj.a = 2;

    // Nested mutation hits the shared inner object; copy.nested.x also becomes 99
    obj.nested.x = 99;

    // Return all 3 variables to compare
    return { obj, alias, copy };
}

function stringReassignTest() {
    // Initialize a string
    let s1 = "hi";

    // Copy the value of s1 into s2 (primitives are copied by value)
    let s2 = s1;

    // Reassign the first string
    s1 += "!";

    // Return both to compare
    return [ s1, s2 ];
}

function arrayOfObjectsTest() {
    // Initialize an array combining 2 objects 
    let arr = [{ id: 1 }, { id: 2 }];

    // Create a shallow copy of the array:
    // - The outer array is a new array
    // - The inner objects are still references (shared with 'arr')
    clone = [ ...arr ];

    // Mutate a nested object (shared reference)
    // This affects both 'arr' and 'clone'
    arr[0].id = 42;

    // Reassign 'arr' to a brand new empty array
    // 'clone' is unaffected and still holds references to the original objects
    arr = [];

    // Return both to compare
    return [ arr, clone ];
}

main();