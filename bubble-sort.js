// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
var arr = generateArrayWithRandomNumbers(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');


var swapHappened = false;
var numberToBeSwapped = undefined;
for (var x = 0, arrayLength = arr.length; x < arrayLength; x++) {
    swapHappened = false; // reset it

    bubbleSort(arr, arrayLength, x);

    // If after EACH set of iterations, no swap happened
    // the array is sorted, exit
    if (!swapHappened) break;
}

function bubbleSort(arr, arrayLength, currentIndex) {
    // we assume that arrayLength - currentIndex has been sorted
    // since the largest numbers will always bubbleUp the array to the right end
    // so we only have to do (arrayLength - currentIndex) number of loops
    var howManyMoreLoopsBeforeFullySorting = arrayLength - currentIndex;

    for (var x = 0; x < howManyMoreLoopsBeforeFullySorting; x++) {
        // If the number to the right of the current number (arr[x]) is
        // smaller than it, swap it to the right of the current number
        if (arr[x + 1] < arr[x]) {
            numberToBeSwapped = arr[x + 1];
            arr[x + 1] = arr[x];
            arr[x] = numberToBeSwapped; // which is: arr[x + 1]
            swapHappened = true; // a swap happened
        }
    }
}

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');
