const convertToRoman = require('./roman-numerals');
const assert = require('assert');

assert.strictEqual(typeof convertToRoman, 'function');
assert.strictEqual(convertToRoman(1), 'I');
assert.strictEqual(convertToRoman(2), 'II');
assert.strictEqual(convertToRoman(3), 'III');
assert.strictEqual(convertToRoman(4), 'IV');

assert.strictEqual(convertToRoman(5), 'V');
assert.strictEqual(convertToRoman(6), 'VI');
assert.strictEqual(convertToRoman(7), 'VII');
assert.strictEqual(convertToRoman(8), 'VIII');
assert.strictEqual(convertToRoman(9), 'IX');

assert.strictEqual(convertToRoman(10), 'X');
assert.strictEqual(convertToRoman(11), 'XI');
assert.strictEqual(convertToRoman(12), 'XII');
assert.strictEqual(convertToRoman(13), 'XIII');
assert.strictEqual(convertToRoman(14), 'XIV');
assert.strictEqual(convertToRoman(15), 'XV');
assert.strictEqual(convertToRoman(26), 'XXVI');
assert.strictEqual(convertToRoman(43), 'XLIII');

assert.strictEqual(convertToRoman(50), 'L');
assert.strictEqual(convertToRoman(55), 'LV');
assert.strictEqual(convertToRoman(76), 'LXXVI');

assert.strictEqual(convertToRoman(100), 'C');
assert.strictEqual(convertToRoman(200), 'CC');
assert.strictEqual(convertToRoman(227), 'CCXXVII');

assert.strictEqual(convertToRoman(500), 'D');
assert.strictEqual(convertToRoman(576), 'DLXXVI');
assert.strictEqual(convertToRoman(981), 'CMLXXXI');

assert.strictEqual(convertToRoman(1000), 'M');
assert.strictEqual(convertToRoman(2999), 'MMCMXCIX');
assert.strictEqual(convertToRoman(3000), 'MMM');