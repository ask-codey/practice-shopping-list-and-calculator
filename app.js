// Connects the page to the functions in shopping.js and calculator.js.
//
// The shopping list:
// - Submitting the shopping form adds the item typed in #item to #shopping-list as an <li>, and empties
//   #item. The page must not reload. Blank items are not added.
// - Each <li> holds a <span> with the item's name and a <button class="remove">Remove</button>.
// - Clicking an item's name crosses it off (toggles the class 'done' on its <li>); clicking it again
//   puts it back.
// - Clicking Remove takes the item off the list.
// - #items-left always shows itemsLeftText(...) for the items that aren't done.
//
// The calculator:
// - Submitting the calculator form shows the result of #first #operator #second in #result, using
//   calculate and formatResult. The page must not reload.
// - If calculate throws, #result shows the error's message instead, and gets the class 'error'
//   (which it loses again when a sum works).

const shoppingForm = document.getElementById('shopping-form');
const itemInput = document.getElementById('item');
const shoppingList = document.getElementById('shopping-list');
const itemsLeft = document.getElementById('items-left');

const calculatorForm = document.getElementById('calculator');
const firstInput = document.getElementById('first');
const operatorSelect = document.getElementById('operator');
const secondInput = document.getElementById('second');
const result = document.getElementById('result');
// TODO: write the event handlers described at the top of this file.
