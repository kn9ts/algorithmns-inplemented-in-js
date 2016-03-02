module.exports = function generateRandomNumbersArray(number_of_items_in_array) {
    var newArray = [];
    var min = 0,
        max = 1000;

    var randomNumber = function() {
        // Returns a random number between min (inclusive) and max (exclusive)
        // Math.random() * (max - min) + min;

        // Returns a random integer between min (included) and max (excluded)
        // Math.floor(Math.random() * (max - min)) + min;

        // Returns a random integer between min (included) and max (included)
        number = Math.random() * (max - min + 1);
        number = Math.round(number) + min;
        return number;
    }

    // TODO: Make sure
    for (var x = 0; x < number_of_items_in_array; x++) {
        var number = randomNumber();
        if (newArray.indexOf(number) == -1) {
            newArray.push(number);
        }
    }

    return newArray;
}
