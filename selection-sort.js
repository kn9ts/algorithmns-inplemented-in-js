// Import random number array generator
var generateRandomNumbersArray = require('./random-numbers');
var arr = generateRandomNumbersArray(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');

function findSmallestUnsortedNumber(array, lastSortedIndex) {
    var currentSmallestUnsortedValue = arr[lastSortedIndex];
    for (var x = lastSortedIndex, length = array.length; x < length; x++) {
        if (currentSmallestUnsortedValue > array[x]) {
            currentSmallestUnsortedValue = array[x];
        }
    }
    return currentSmallestUnsortedValue;
}

function swapSmallestValueWithFirstUnsortedValue(arr, sortedIndex, smallestValue) {
    var toBeSwappedNumber = arr[sortedIndex],
        currentIndexOfSmallestValue = arr.indexOf(smallestValue);
    arr[sortedIndex] = smallestValue;
    arr[currentIndexOfSmallestValue] = toBeSwappedNumber;
}


var smallestValue = undefined;
for (var x = 0, arrLength = arr.length; x < arrLength; x++) {
    smallestValue = findSmallestUnsortedNumber(arr, x);
    swapSmallestValueWithFirstUnsortedValue(arr, x, smallestValue);
}

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');
