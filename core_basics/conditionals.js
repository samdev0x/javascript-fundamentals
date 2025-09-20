// Create a simple checker

function main() {
    console.log(checkSum(5));
    console.log(checkSum(-1));
    console.log(checkSum(0));
    console.log(checkSumTernary(20));
    console.log(checkSumTernary(17));
}

function checkSum(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}


// Ternary expressions is great for binary conditions where handle only 2 outcomes, nested ternary is hard to read
function checkSumTernary(num) {
    return num >= 18 ? "Adult" : "Minor";
}

main();