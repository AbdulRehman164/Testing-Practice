const reverseString = require('./reverseString.js');

it('Reverse one word', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

it('Reverse a sentence', () => {
    expect(reverseString('My name is ...')).toBe('... si eman yM');
});
