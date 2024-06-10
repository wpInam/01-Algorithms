function twoSumSorted(nums, target) {
    // Initialize two pointers
    let left = 0;
    let right = nums.length - 1;

    // Iterate while left pointer is less than right pointer
    while (left < right) {
        // Calculate the sum of the values at the two pointers
        const currentSum = nums[left] + nums[right];
        
        // Check if the sum matches the target
        if (currentSum === target) {
            return [left, right];
        }
        
        // If current sum is less than target, move the left pointer to the right
        else if (currentSum < target) {
            left += 1;
        }
        
        // If current sum is greater than target, move the right pointer to the left
        else {
            right -= 1;
        }
    }
    
    // If no solution is found, return an empty array
    return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSumSorted(nums, target));  // Output: [0, 1]
