function factorialTailRec(n, acc = 1) {
    if (n === 0) {
        return acc;
    }
    return factorialTailRec(n - 1, n * acc);
}

// Example usage:
console.log(factorialTailRec(5)); // Output: 120
