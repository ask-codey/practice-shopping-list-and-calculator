// The calculator's sums.
//
// Requirements:
// - calculate(first, operator, second) works out first operator second, for the operators '+', '-', '*'
//   and '/'. Dividing by zero throws an Error with the message "Can't divide by zero", and any other operator
//   throws an Error with the message 'Unknown operator: %' (with the operator it was given).
// - formatResult(value) is the value as text, rounded to at most 4 decimal places, without extra zeros:
//   0.1 + 0.2 shows as '0.3', 10 / 3 as '3.3333', and 7 as '7'.

function calculate(first, operator, second) {
    return 0;
}

function formatResult(value) {
    return '';
}

// Lets the tests use these functions. In the browser there's no module, so this line does nothing.
if (typeof module !== 'undefined') {
    module.exports = { calculate, formatResult };
}
