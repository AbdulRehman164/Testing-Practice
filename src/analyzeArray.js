function analyzeArray(arr) {
    return {
        average: average(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}

function average(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
}

module.exports = analyzeArray;
