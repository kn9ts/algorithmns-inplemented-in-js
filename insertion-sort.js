// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
var arr = generateArrayWithRandomNumbers(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');
// ALL THE MAGIC HAPPENS HERE
var number = undefined;
for (var x = 0, arrayLength = arr.length; x < arrayLength; x++) {
    // Index 0 is usually sorted
    if (x !== 0) {
        var number = arr[x];
        insertNumberToItsRightfulPosition(arr, number, x);
    }
}

function insertNumberToItsRightfulPosition(arr, number, currentIndexPosition) {
    // Start from the current number's position downwards/leftwards (<---)
    for (var x = currentIndexPosition - 1; x >= 0; x--) {
        // Check if the number position before the current one in question
        // is larger than it, if it is, shift it to the right and shift the number
        // to the left untill there's no number to it's that is larger than it
        if (arr[x] > number) {
            arr[x + 1] = arr[x];
            arr[x] = number;
        }
    }
}

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');
