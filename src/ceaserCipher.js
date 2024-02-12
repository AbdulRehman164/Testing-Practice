function ceaserCipher(str, shifter) {
    strArr = str.split('');
    strArr.forEach((letter, index) => {
        strArr[index] = convert(letter, shifter);
    });
    return strArr.join('');
}

function convert(letter, shifter) {
    isAlphabet = /^[a-zA-Z]$/.test(letter);
    if (!isAlphabet) return letter;
    else {
        return shift(letter, shifter);
    }
}

// 97-122
function shift(letter, shifter) {
    let mask = letter === letter.toLowerCase() ? 122 : 90;
    let number = letter.charCodeAt(0) + shifter;
    if (number > mask) number -= 26;
    return String.fromCharCode(number);
}

module.exports = ceaserCipher;
