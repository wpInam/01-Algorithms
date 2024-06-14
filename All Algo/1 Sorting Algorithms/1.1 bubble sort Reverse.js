function bubbleSort(arr){
    let len = arr.length;
    for(var i=0; i<len; i++){
        for(var j=0; j<len-1-i; j++){
            if(arr[j] < arr[j+1]){ // Main 
                var temp=arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// Usage
let array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);