const palindromes = function (word) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
    const newWord = word
    .toLowerCase()
    .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');
    const reversedWord = newWord.split('').reverse().join('');
    return reversedWord === newWord;
    
};

// Do not edit below this line
module.exports = palindromes;
