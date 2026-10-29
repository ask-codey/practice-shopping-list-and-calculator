// Helpers for the shopping list.
//
// Requirements:
// - cleanItem(text) is the text with the spaces at either end removed. Text that's only spaces gives ''.
// - itemsLeftText(count) describes how many items are still to buy: 'Nothing left to buy' for 0,
//   '1 item left' for 1, and '3 items left' for 3.

function cleanItem(text) {
    return text;
}

function itemsLeftText(count) {
    return '';
}

// Lets the tests use these functions. In the browser there's no module, so this line does nothing.
if (typeof module !== 'undefined') {
    module.exports = { cleanItem, itemsLeftText };
}
