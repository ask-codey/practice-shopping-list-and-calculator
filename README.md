# Practice: Shopping List and Calculator

Practice code for the lesson **Practice: Shopping List and Calculator** in the C# Full-Stack Bootcamp on [ask-codey.com](https://www.ask-codey.com).

One web page, two little apps: a shopping list you can add to, cross off and clear, and a calculator. The page and its styles are done; you'll write the JavaScript.

## What's here

- `index.html`, `styles.css`: the page. Ready to use.
- `shopping.js`, `calculator.js`: functions that work things out, with no page involved. For you to finish.
- `app.js`: connects the page to those functions, with event handlers. For you to finish.
- `shopping.test.js`, `calculator.test.js`: tests for `shopping.js` and `calculator.js`. You don't need to change these.

The requirements are in the comment at the top of each file you finish.

## What to do

Open the folder in VS Code, and a terminal there.

1. Finish `shopping.js` and `calculator.js`, running the tests as you go: `node --test`.
2. Finish `app.js`. Open `index.html` in your browser (double-click it), and try the checklist below. Press **F12** to see the Console when something doesn't work.

## Checklist for the page

- [ ] Adding *milk* puts it on the list, empties the box, and shows *1 item left*. The page doesn't reload.
- [ ] Adding an item of only spaces does nothing.
- [ ] Clicking an item crosses it off, and the count goes down; clicking it again puts it back.
- [ ] Remove takes an item off the list, and the count follows.
- [ ] With everything crossed off or removed, it says *Nothing left to buy*.
- [ ] 10 + 4 shows 14; 10 ÷ 4 shows 2.5; 10 ÷ 3 shows 3.3333.
- [ ] 10 ÷ 0 shows *Can't divide by zero* in red; the next sum that works is black again.

## Tips

- `event.preventDefault()` stops a form's submit from reloading the page.
- `document.createElement`, `textContent`, `appendChild`, `remove()` and `classList.toggle` do the DOM work.
- Give each new item's span and button their own `addEventListener('click', ...)` as you create them.
- `shoppingList.querySelectorAll('li:not(.done)').length` counts the items still to buy.
- A text box's value is a string: `Number(firstInput.value)` turns it into a number.
