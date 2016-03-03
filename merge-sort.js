// Import random number array generator
var generateArrayWithRandomNumbers = require('./random-numbers');
var arr = generateArrayWithRandomNumbers(10);
console.log('Generated unsorted array: [' + arr.join(', ') + ']');

// ALL THE MAGIC HAPPENS HERE
mergeSort(arr);

// Print out the sorted array
console.log('Sorted array: [' + arr.join(', ') + ']');

function mergeSort(input) {
    arr = splitArrayRecusively(input);
}

function splitArrayRecusively(input) {
    if (input.length < 2) {
        return input;
    }

    var pivot = Math.floor(input.length / 2);
    var leftSubArray = input.slice(0, pivot);
    var rightSubArray = input.slice(pivot, input.length);

    return sortAndMergeArrays(
        splitArrayRecusively(leftSubArray),
        splitArrayRecusively(rightSubArray)
    );
}

function sortAndMergeArrays(left, right) {
    var sortedArray = [];
    // console.log(sortedArray, left, right, left[0], right[0]);

    while (left && left.length > 0 && right && right.length > 0) {
        if (left[0] <= right[0]) {
            // array.shift() method removes the first element
            // from an array and returns that element
            sortedArray.push(left.shift());
            // console.log("left", left, right);
        } else {
            sortedArray.push(right.shift());
            // console.log("right", left, right);
        }
    }

    // Call concat on sortedArray, merging left and right into it
    return [].concat.call(sortedArray, left, right);
}
