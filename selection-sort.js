// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
var arr = generateArrayWithRandomNumbers(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');

// ALL THE MAGIC HAPPENS HERE
var currentSmallestUnsortedValue = undefined;
for (var x = 0, arrLength = arr.length; x < arrLength; x++) {
    // In every loop, find the smallest value in the unsorted array section
    // This is all of it in the 1st loop
    // eventually it's (x + 1) x being the last index to be sorted
    currentSmallestUnsortedValue = findNextSmallestUnsortedValue(arr, x);

    // Then swap the unsorted value next, or right after the last sorted value with
    // The current smallest unsorted value
    swapSmallestValueWithFirstUnsortedValueInArray(arr, x, currentSmallestUnsortedValue);
}

function findNextSmallestUnsortedValue(array, lastSortedIndex) {
    var currentSmallestUnsortedValue = arr[lastSortedIndex];
    for (var x = lastSortedIndex, length = array.length; x < length; x++) {
        if (currentSmallestUnsortedValue > array[x]) {
            currentSmallestUnsortedValue = array[x];
        }
    }
    return currentSmallestUnsortedValue;
}

function swapSmallestValueWithFirstUnsortedValueInArray(arr, lastSortedIndex, smallestValue) {
    var numberToBeSwapped = arr[lastSortedIndex],
        currentIndexOfSmallestValue = arr.indexOf(smallestValue);

    arr[lastSortedIndex] = smallestValue;
    arr[currentIndexOfSmallestValue] = numberToBeSwapped;
}

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');
