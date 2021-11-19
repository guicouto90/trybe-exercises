const assert = require('assert');

const sum = (...params) => {
    let sum = 0;
    params.forEach((value) => {
      sum += value;
    });
    return sum;
}

console.log(sum([1,2],[3,4]));

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);