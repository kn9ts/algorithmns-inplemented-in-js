// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
// var arr = generateArrayWithRandomNumbers(10);
var arr = [98, 75, 34, 9, 18, 94, 55, 97, 4, 29];
console.log('Generated unsorted array: [' + arr.join(', ') + ']');

// Get a random pivot point on the array
// var pivot = Math.round(Math.random() * arr.length);
var pivot = arr[Math.floor(arr.length / 2)];
var wallIndex = 0; // 1st array index
var currentElement = arr[wallIndex];
var swapHappened = false;
var valueToSwap = undefined;

for (var x = 0, arrayLength = arr.length; x < arrayLength; x++) {
    swapHappened = false; // reset it

    // if an item is smaller than the pivot
    // move it to the other side of the wall
    // basically place it in the (n) position,
    // (n) being the current index of the wall
    // move up the index of the wall

    for (var x = 0, arrayLength = arr.length; x < arrayLength; x++) {
        if (arr[x] < pivot) {
            valueToSwap = arr[wallIndex];
            arr[wallIndex] = arr[x];
            wallIndex++;
            swapHappened = true;
        }

        if (!swapHappened && arr[x] === pivot) {
            valueToSwap = arr[x];
            arr[x] = pivot;
            pivot = valueToSwap;
            wallIndex++;
        }
    }
};

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');
