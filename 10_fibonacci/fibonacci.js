const fibonacci = function(n) {
    n = +n;
    if (n < 0) { 
        return "OOPS";
    }
    if (n == 0) {
        return 0;
    }
    let current = 1;
    let previous = 0;
    let result = 1;
    for (let i = 1; i < n; i++) {
        result = previous + current;
        previous = current;
        current = result;
        
        
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
