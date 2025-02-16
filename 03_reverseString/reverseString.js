const reverseString = function(string) {
    let characters = string.split('');

    let reversedString = "";

    for (let i = characters.length - 1; i >= 0; i--) {
        reversedString += characters[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
