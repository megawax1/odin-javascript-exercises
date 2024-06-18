const repeatString = function(string, num) {
    let finishedString = "";
    if (num < 0) {
        finishedString = "ERROR";
    } else {
    for (let i = 0; i < num; i++) {
        finishedString += string;
    }
}
    return finishedString;
};

// Do not edit below this line
module.exports = repeatString;
