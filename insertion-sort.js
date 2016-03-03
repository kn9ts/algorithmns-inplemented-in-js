// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
var arr = generateArrayWithRandomNumbers(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');

// ALL THE MAGIC HAPPENS HERE
var number = undefined;
for (var x = 0, arrayLength = arr.length; x < arrayLength; x++) {
    // Index 0 is usually sorted
    if (x !== 0) {
        // in each loop, find the smallest number in the unsorted subarray
        // [move/shift] it to the right until the number to it's right is smaller than it
        // in 1st loop, none is. From the 2nd loop, it's (x - 1)
        // x being the index of the last sorted number/item
        insertSort(arr, arr[x], x - 1);
    }
}

function insertSort(arr, number, lastRightIndexPosition) {
    // Optimisation: start from the current number's position downwards/leftwards (<---)
    for (var x = lastRightIndexPosition; x >= 0; x--) {
        // Check if the number to the left of the arr from the current position we are,
        // is larger than the number we want to sort,
        // if it is, shift the numberToSort to the left
        // until there's no number to it's left that is larger than it
        // We then insert it to the right of the number smaller than it
        if (arr[x] > number) {
            arr[x + 1] = arr[x];
            arr[x] = number;
        }
    }
}

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');
