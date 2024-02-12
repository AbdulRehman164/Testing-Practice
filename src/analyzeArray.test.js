const analyzeArray = require('./analyzeArray.js');

it('analyzeArray([1,2,3]) becomes {average : 2, min : 1, max : 3, length: 3}', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3,
    });
});

it('analyzeArray([10,15,30,9,25,5,13,25]) becomes {average : 2, min : 5, max : 30, length: 8}', () => {
    expect(analyzeArray([10, 15, 30, 9, 25, 5, 13, 25])).toEqual({
        average: 16.5,
        min: 5,
        max: 30,
        length: 8,
    });
});
