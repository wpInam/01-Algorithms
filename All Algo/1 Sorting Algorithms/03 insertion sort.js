function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let array3 = [12, 11, 13, 5, 6];
console.log("Insertion Sorted array:", insertionSort(array3));
