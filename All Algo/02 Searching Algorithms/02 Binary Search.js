function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Return -1 if the element is not found
}

// Example usage:
let array5 = [2, 3, 4, 10, 40];
let target2 = 10;
console.log("Element found at index:", binarySearch(array5, target2));
