function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      const pivotIndex = partition(array, left, right);
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }
    return array;
  }
  
  function partition(array, left, right) {
    const pivot = array[right];
    let i = left - 1;
  
    for (let j = left; j < right; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    return i + 1;
  }
  
  // Example usage:
  const arr = [3, 6, 8, 10, 1, 2, 1];
  console.log(quickSort(arr)); // Output: [1, 1, 2, 3, 6, 8, 10]
  