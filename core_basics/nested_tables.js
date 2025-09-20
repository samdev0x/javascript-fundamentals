// Generate a multiplication table as a 2D array 

function main() {
    console.table(multiplicationTable(6));
}

function multiplicationTable(size) {
    // outer array to hold all rows
    let table = [];

    // edge case: no table for size < 1
    if (size < 1) {
        return table;
    }

    // outer loop -> rows
    for (let i = 0; i < size; i++) {
        // start a new row
        let row = [];

        // inner loop -> columns
        for (let j = 0; j < size; j++) {
            // compute the product of this cell
            row.push((i + 1) * (j + 1));
        }
        // add finished row to the table
        table.push(row);
    }

    // return the full 2D array
    return table;
}

main();