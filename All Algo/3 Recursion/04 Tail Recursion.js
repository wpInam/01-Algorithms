// Different Typese of Recursive functions
// ~  https://youtu.be/HIt_GPuD7wk 
function factorialTailRec(n, acc = 1) {
    if (n === 0) {
        return acc;
    }
    return factorialTailRec(n - 1, n * acc);
}

// Example usage:
console.log(factorialTailRec(5)); // Output: 120
