const palindromes = function (str) {
    let remPunc = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    console.log("Removed punctuation string is: " + remPunc);
    let remSpace = remPunc.replace(/\s+/g, '').toLowerCase();
    console.log("Remove space string is: " + remSpace);
    let rev = remSpace.split("").reverse().join("");
    console.log("Reversed string is: " + rev)

    if (remSpace == rev) {
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
