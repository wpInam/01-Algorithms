function maxSumSubarray(arr, k) {
    if (arr.length === 0 || k <= 0) {
        return 0;
    }

    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
