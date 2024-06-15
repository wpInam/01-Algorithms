function quickSort(arr) {
    if (arr.length <= 1)  return arr;

    const pivot = arr[Math.floor(arr.length / 2)]; // Mid Value
    const left = [];
    const right = [];
    const equal = [];

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];

    return [ quickSort(left),  equal,  quickSort(right)]; // Use this we you want to see the tree in console
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];
console.log("Sorted array:", quickSort(array));

// --- See Array in Action
[
    [
        [
            [],
            [
                5
            ],
            [
                7
            ]
        ],
        [
            23
        ],
        []
    ],
    [
        32
    ],
    [
        [
            34
        ],
        [
            62
        ],
        []
    ]
]