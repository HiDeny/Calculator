// Plan:

// Basics:
//      - add
//      - subtract
//      - multiply
//      - divide
// 
// Func operate, takes operator and 2 numbers:
//      call basic function on the numbers
// 
// 
// 



// Basics:
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Operate:
const operate = (operator, num1, num2) => operator(num1, num2);


// Defaults:
let defaultDisplay = '5318008';
let currentDisplay = '';


// HTML calculator DOM:
const calculator = document.querySelector('#calculator')

const display = document.createElement('div');
        display.setAttribute('class', 'display');
        display.textContent = defaultDisplay;

const buttons = document.createElement('div');
        buttons.setAttribute('class', 'buttons');

const numbers = document.createElement('div');
        numbers.setAttribute('class', 'numbers');

const operators = document.createElement('div');
        operators.setAttribute('class', 'numbers');


const operator = document.createElement('div');
        operator.setAttribute('class', 'display');


const clear = document.createElement('button');
        clear.setAttribute('class', 'clear');
        clear.textContent = 'C';
        clear.addEventListener('click', () => display.textContent = '');


calculator.appendChild(display);
calculator.appendChild(numbers);
calculator.appendChild(operators);
operators.appendChild(clear);

for (let i = 1; i <= 9; i++) {
    const number = document.createElement('div');
    number.setAttribute('class', 'number');
    number.addEventListener('click', () => {
        display.textContent = currentDisplay;
        currentDisplay += number.textContent;
    });
    number.textContent = i;
    numbers.appendChild(number);
}