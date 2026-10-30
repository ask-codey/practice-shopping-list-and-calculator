// Tests for calculator.js. Run them with: node --test
// You don't need to change this file.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { calculate, formatResult } = require('./calculator.js');

test('calculate: the four operators', () => {
    assert.equal(calculate(10, '+', 4), 14);
    assert.equal(calculate(10, '-', 4), 6);
    assert.equal(calculate(10, '*', 4), 40);
    assert.equal(calculate(10, '/', 4), 2.5);
});

test('calculate: dividing by zero throws', () => {
    assert.throws(() => calculate(10, '/', 0), { message: "Can't divide by zero" });
});

test('calculate: an unknown operator throws', () => {
    assert.throws(() => calculate(10, '%', 3), { message: 'Unknown operator: %' });
});

test('formatResult: at most 4 decimal places, no extra zeros', () => {
    assert.equal(formatResult(0.1 + 0.2), '0.3');
    assert.equal(formatResult(10 / 3), '3.3333');
    assert.equal(formatResult(7), '7');
    assert.equal(formatResult(2.5), '2.5');
});
