function printTriangle(rows) {
    for (let i = rows; i > 0; i--) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printTriangle(7);