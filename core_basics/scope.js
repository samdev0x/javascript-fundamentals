// Testing scope of variables

function main() {
    // no access, ReferenceError: variable1 is not defined
    // console.log(variable1);
    // console.log(variable2);

    // has access to 'variable2' because we call the function and it returns the variable
    console.log(scopeTest1());


    // only access to 'j' but throws error if we return both values, ReferenceError: 'i' is not defined
    // we only return 'j'
    console.log(scopeTest2());

    // we have access to the variable because the inner function returns it while the main function returns the inner function's call
    console.log(scopeTest3());

    // since we return 'msg' and not 'msg()', we return the function itself so it prints [Function: msg]
    console.log(scopeTest4());

    // fn is a reference to the function scopeTest4(); We can now call fn() and it will return the same value as the function
    const fn = scopeTest4();
    console.log(fn());
}

// Function scope: Only this function has access to 'variable1' and 'variable2' unless we return it
function scopeTest1() {
    // Only accessible inside this function
    let variable1 = 10;

    // Accessible to the outside because we return it
    let variable2 = 20;
    return variable2; 
}


// Loop scope: Only the loop has access to 'i' unless we replace 'let i = 0' with 'var i = 0'. With var, 'i' leaks outside the loop
function scopeTest2() {

    // by using let instead of var, the variable 'i' becomes block scope and lives only within the loop's block
    for (let i = 0; i < 3; i++) {
        // 'i' is only accessible here, prints
        console.log(i);
    }

    // by using var instead of let, the variable 'j' becomes function scope and lives within scopeTest2();
    for (var j = 0; j < 3; j++) {
        // 'j' is accessible, prints
        console.log(j);
    }
    
    // return only has access to 'j' while 'i' stays undefined
    return j;
}


// Lexical scope: 
function scopeTest3() {
    // declare a variable
    let message = "hi";

    // create an inner function
    function msg() {
        // inner function uses outer variable
        return message;
    }
    // return the function call and return its result, prints "hi"
    return msg();
}


// Lexical scope 2: 
function scopeTest4() {
    // declare a variable
    let message = "hello";

    // create an inner function
    function msg() {
        // inner function uses outer variable
        return message;
    }
    // return the function itself
    return msg;


}

main();