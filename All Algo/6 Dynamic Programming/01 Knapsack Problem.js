function knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Example usage:
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log("Maximum value in Knapsack:", knapsack(values, weights, capacity)); // Output: 220
