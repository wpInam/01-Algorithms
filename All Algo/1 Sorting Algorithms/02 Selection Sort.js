function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) { // 1,2,3,4,5,...
        let minIndex = i;
        for (let j = i + 1; j < len; j++) { // j=1->len // j=2->len // j=3->len  
            if (arr[j] < arr[minIndex]) { // if current value less than old then select that
                minIndex = j;
            }
        }
        // Swap the elements
        if (minIndex !== i) { // Arrange it into its proper position
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// Example usage:
let array2 = [64, 25, 12, 22, 11];
console.log("Selection Sorted array:", selectionSort(array2));
