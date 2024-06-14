function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) { // 1,2,3,...
        let key = arr[i]; // 11
        let j = i - 1; // Select Dynamic range 0|1|2 To Compare Previous Element
        while (j >= 0 && arr[j] > key) {// 12 > 11  || Reverse loop
            arr[j + 1] = arr[j]; // It is replacing next element with previous element 
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let array3 = [12, 11, 13, 5, 6];
console.log("Insertion Sorted array:", insertionSort(array3));
