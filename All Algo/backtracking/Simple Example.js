function generateSubsets(nums) {
    const result = [];

    function backtrack(start, path) {
        // Add the current subset (path) to the result
        result.push([...path]);

        // Iterate over the remaining elements to generate subsets
        for (let i = start; i < nums.length; i++) {
            // Include nums[i] in the current subset
            path.push(nums[i]);
            // Recursively generate all subsets that include nums[i]
            backtrack(i + 1, path);
            // Backtrack by removing nums[i] from the current subset
            path.pop();
        }
    }

    // Start the backtracking with an empty path
    backtrack(0, []);
    return result;
}

// Example usage
const nums = [1, 2, 3];
const subsets = generateSubsets(nums);
console.log(subsets); 
// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
