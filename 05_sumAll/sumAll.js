const sumAll = function(int1, int2) {
    if (Number.isInteger(int1) && Number.isInteger(int2) && int1 >= 0 && int2 >= 0) {
        let sum = 0;
        let start = 0;
        let end = 0;
        if (int1 < int2) {
            start = int1;
            end = int2;
        } else {
            start = int2;
            end = int1;
        }

        for (let i = start; i <= end; i++) {
            sum += i;
        }

        return sum;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
