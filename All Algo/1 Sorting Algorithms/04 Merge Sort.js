// Theme Behind this Algorithm
// Take two sorted array and merge them. if we do not have sorted array then use recursion to make them sorted
function mergeSort(arr) {
    if (arr.length <= 1)  return arr;
    debugger
    // const array = [38, 27, 43, 3, 9, 82, 10];
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    var a = mergeSort(left); // We can add these lines inside the function
    var b = mergeSort(right);  // We can add these lines inside the function
    
    return merge(a, b); // --- Multi Level Recursion
}

function merge(left, right) {
    //  What Does That loop do?
    // It pick two sorted array and Merge them. by creating a new array and comapre the values one by one and push them into result
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) { // 0 < 3 && 0<4
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); 
    // --- What Does that line do? .concat(left.slice(leftIndex)).concat(right.slice(rightIndex)
    // When we reach the end Either "leftIndex" OR "rightIndex" Then may be some Element remain to be pushed into Result.
    // Visit this video for more detail "https://youtu.be/nCNfu_zNhyI?t=568"
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array:", mergeSort(array));
