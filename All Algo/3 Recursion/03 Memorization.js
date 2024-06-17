// https://youtu.be/WbwP4w6TpCk 
function fibonacciMemo(n, memo = {}) {
    if (n === 0 || n === 1) {
        return n;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Example usage:
console.log(fibonacciMemo(6)); // Output: 8
