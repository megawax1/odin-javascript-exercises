const sumAll = function(x, y) {
        if (x < 0 || y < 0) {
                return "ERROR";
            }
            if (!Number.isInteger(x) || !Number.isInteger(y)) {
                return "ERROR";
            }
        let start;
        let end;
        let sum = 0;
    if (x < y) {
        start = x;
        end = y;
    } else {
        start = y;
        end = x;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
