function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) { // 1,2,3,4,5
        for (let j = 0; j < len - 1 - i; j++) { //7-1-0 = 6 // 7-1-1=5 // 7-1-2=4 
            if (arr[j] > arr[j + 1]) { // Main
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));
