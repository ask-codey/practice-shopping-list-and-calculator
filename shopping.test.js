// Tests for shopping.js. Run them with: node --test
// You don't need to change this file.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { cleanItem, itemsLeftText } = require('./shopping.js');

test('cleanItem: trims the spaces at either end', () => {
    assert.equal(cleanItem('  milk  '), 'milk');
    assert.equal(cleanItem('peanut butter'), 'peanut butter');
});

test('cleanItem: only spaces gives an empty string', () => {
    assert.equal(cleanItem('   '), '');
});

test('itemsLeftText: none, one and many', () => {
    assert.equal(itemsLeftText(0), 'Nothing left to buy');
    assert.equal(itemsLeftText(1), '1 item left');
    assert.equal(itemsLeftText(3), '3 items left');
});
