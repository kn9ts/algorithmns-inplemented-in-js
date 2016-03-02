module.exports = function generateRandomNumbersArray(number_of_numbers) {
    var newArray = [];
    var min = 0,
        max = 1000;

    for (var x = 0; x < number_of_numbers; x++) {
        // Returns a random number between min (inclusive) and max (exclusive)
        // Math.random() * (max - min) + min;

        // Returns a random integer between min (included) and max (excluded)
        // Math.floor(Math.random() * (max - min)) + min;

        // Returns a random integer between min (included) and max (included)
        randomNumber = Math.random() * (max - min + 1);
        randomNumber = Math.round(randomNumber) + min;
        newArray.push(randomNumber);
    }

    return newArray;
}

// Testing...
// console.log(generateRandomNumbersArray(5));
