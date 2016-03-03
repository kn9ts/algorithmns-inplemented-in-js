// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
var arr = generateArrayWithRandomNumbers(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');


var swapHappened = false;
var numberToBeSwapped = undefined;
for (var x = 0, arrayLength = arr.length; x < arrayLength; x++) {
    swapHappened = false; // reset it after each set of ops

    // NOTE: large number eventually bubble up to the right end of the array
    // Thus usually end up being sorted
    // You could say sorting happens in reverse order
    // (decending, to make accending)
    bubbleSort(arr, arrayLength, x);

    // If after EACH set of iterations, no swap happened
    // the array is sorted, exit
    if (!swapHappened) break;
}

function bubbleSort(arr, arrayLength, currentSortedIndex) {
    // we assume that (arrayLength - currentSortedIndex) has been sorted
    // since the largest numbers will always bubbleUp the array to the right end
    // so we only have to do (arrayLength - currentSortedIndex) number of loops
    var howManyMoreLoopsToGo = arrayLength - currentSortedIndex;

    for (var x = 0; x < howManyMoreLoopsToGo; x++) {
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
