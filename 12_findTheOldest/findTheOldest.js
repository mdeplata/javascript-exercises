const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        let aAge = 0;
        let bAge = 0;

        if (!a.yearOfDeath) {
            aAge = 2025 - a.yearOfBirth;
        } else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }

        if (!b.yearOfDeath) {
            bAge = 2025 - b.yearOfBirth;
        } else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }

        return aAge > bAge ? -1 : 1;
    })

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
