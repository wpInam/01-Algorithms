function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the element is not found
}

// Example usage:
let array4 = [2, 3, 4, 10, 40];
let target1 = 10;
console.log("Element found at index:", linearSearch(array4, target1));
