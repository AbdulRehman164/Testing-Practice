const capitalize = require('./capitalize.js');

it('Capitalized first chracter of one word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

it('Capitalized first chracter of a sentence', () => {
    expect(capitalize('hello my name is ...')).toBe('Hello my name is ...');
});

it('Does not throw error if first letter is not an alphabet', () => {
    expect(capitalize('1hello')).toBe('1hello');
});
