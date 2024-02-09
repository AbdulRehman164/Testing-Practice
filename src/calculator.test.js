const calculator = require('./calculator.js');

it('add function works', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

it('subtract function works', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

it('multiply function works', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
});

it('divide function works', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});
