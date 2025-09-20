// Logical operator practice

function main() {
    console.log(canEnter(20, true));
    console.log(canEnter(20, false));
    console.log(canEnter(15, true));
    console.log(canEnter(15, false));
    console.log(getName("John"));
    console.log(getName());
    console.log(getName(null));
    console.log(canAccess({ name: "John", isAdmin: false, banned: false }));
    console.log(canAccess({ name: "Charlie", isAdmin: true, banned: false }));
    console.log(canAccess({ name: "Alice", isAdmin: false, banned: true }));
    console.log(canAccess({ name: "Steve", isAdmin: false, banned: false }));
}

function canEnter(age, hasTicket) {
    // check if age is 18 or above AND (&&) if hasTicket is true - both conditions are checked and need to be true to run the code block
    if (age >= 18 && hasTicket) {
        return true;
    }
    return false;
}

function getName(input) {
    // if input is null OR (||) undefined, return fallback
    if (input === null || input === undefined) {
        return "Anonymous";
    }
    // otherwise return the input
    return input;
}

function canAccess(user) {
    // check for banned users first
    if (user.banned) {
        return "Access denied";
    }

    // grant access if user is admin OR has special name
    if (user.isAdmin || user.name === "John") {
        return "Access granted";
    }
    
    // default case
    return "User access";

}

main();