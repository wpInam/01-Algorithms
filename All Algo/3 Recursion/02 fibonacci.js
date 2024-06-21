function fibonacci(n) {
    // Base cases: return n if n is 0 or 1
    if (n === 0 || n === 1) {
        return n;
    }
    // Recursive case: sum of the two preceding numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(6)); // Output: 8

// 1,1,2,3,5,8,13,21