// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
var arr = generateArrayWithRandomNumbers(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');

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


var currentSmallestUnsortedValue = undefined;
for (var x = 0, arrLength = arr.length; x < arrLength; x++) {
    currentSmallestUnsortedValue = findNextSmallestUnsortedValue(arr, x);
    swapSmallestValueWithFirstUnsortedValueInArray(arr, x, currentSmallestUnsortedValue);
}

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');
