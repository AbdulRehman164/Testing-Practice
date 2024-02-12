const CeaserCipher = require('./ceaserCipher.js');

// test for one letter shift
it('CeaserCipher("abc",1) becomes "bcd"', () => {
    expect(CeaserCipher('abc', 1)).toBe('bcd');
});

// test for puncuation
it('CeaserCipher("abc!",1) becomes "bcd!"', () => {
    expect(CeaserCipher('abc!', 1)).toBe('bcd!');
});

// test for number
it('CeaserCipher("abc5",1) becomes "bcd5"', () => {
    expect(CeaserCipher('abc5', 1)).toBe('bcd5');
});

// test for uppercase letter
it('CeaserCipher("ABC",1) becomes "BCD"', () => {
    expect(CeaserCipher('ABC', 1)).toBe('BCD');
});

// test for mixed letter uppercase and lowecase
it('CeaserCipher("Abc",1) becomes "Bcd"', () => {
    expect(CeaserCipher('Abc', 1)).toBe('Bcd');
});

// test for sentence
it('CeaserCipher("Hi, this is me",1) becomes "Ij, uijt jt nf"', () => {
    expect(CeaserCipher('Hi, this is me', 1)).toBe('Ij, uijt jt nf');
});

// test for alphabet wrapping
it('CeaserCipher(xyz,1) becomes "yza"', () => {
    expect(CeaserCipher('xyz', 1)).toBe('yza');
});

// test for two letters shift
it('CeaserCipher(abc,2) becomes "cde"', () => {
    expect(CeaserCipher('abc', 2)).toBe('cde');
});

// test for three letters shift
it('CeaserCipher(abc,3) becomes "def"', () => {
    expect(CeaserCipher('abc', 3)).toBe('def');
});

// test for 26 letters shift
it('CeaserCipher(abc, 26) becomes "abc"', () => {
    expect(CeaserCipher('abc', 26)).toBe('abc');
});

// test for 27 letters shift
it('CeaserCipher(abc,27) becomes "bcd"', () => {
    expect(CeaserCipher('abc', 27)).toBe('bcd');
});

// test for zero letter shift
it('CeaserCipher(abc,0) becomes "abc"', () => {
    expect(CeaserCipher('abc', 0)).toBe('abc');
});
