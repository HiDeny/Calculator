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
let currentNumber = '';
let selectedOperator = '';
let num1 = 0;
let num2 = 0;
let result = 0;


// HTML calculator DOM:
const calculator = document.querySelector('#calculator')

// Display
const display = document.createElement('div');
        display.setAttribute('class', 'display');
        display.textContent = defaultDisplay;

// Operators
const clear = document.createElement('button');
        clear.textContent = 'C';
        clear.setAttribute('class', 'clear');
        clear.addEventListener('click', () => {
                display.textContent = '0';
                currentNumber = '';
        });


const btnAdd = document.createElement('button');
        btnAdd.textContent = '+';
        btnAdd.setAttribute('class', 'add');
        btnAdd.addEventListener('click', () => {
                num1 = Number(currentNumber);
                selectedOperator = '+';
                currentNumber = '';
        })


const btnSubtract = document.createElement('button');
        btnSubtract.textContent = '-';
        btnSubtract.setAttribute('class', 'subtract');
        btnSubtract.addEventListener('click', () => {
                num1 = Number(currentNumber);
                selectedOperator = '-';
                currentNumber = '';
        })

const btnMultiply = document.createElement('button');
        btnMultiply.textContent = 'x';
        btnMultiply.setAttribute('class', 'multiply');
        btnMultiply.addEventListener('click', () => {
                num1 = Number(currentNumber);
                selectedOperator = '*';
                currentNumber = '';
        })

const btnDivide = document.createElement('button');
        btnDivide.textContent = '/';
        btnDivide.setAttribute('class', 'divide');
        btnDivide.addEventListener('click', () => {
                num1 = Number(currentNumber);
                selectedOperator = '/';
                currentNumber = '';
        })

const btnResult = document.createElement('button');
        btnResult.textContent = '=';
        btnResult.setAttribute('class', 'result');
        btnResult.addEventListener('click', () => {
                currentNumber = Number(currentNumber);
                switch(selectedOperator) {
                        case '+':
                                display.textContent = add(num1, currentNumber);
                                currentNumber = '';
                                break;
                        case '-':
                                display.textContent = subtract(num1, currentNumber);
                                break;
                        
                        case '*':
                                display.textContent = multiply(num1, currentNumber);
                                break;
                        
                        case '/':
                                display.textContent = divide(num1, currentNumber);
                                break;
                        

                }
        });


// Numbers
const numbers = document.createElement('div');
        numbers.setAttribute('class', 'numbers');

const divOperators = document.createElement('div');
        divOperators.setAttribute('class', 'divOperators');

for (let i = 1; i <= 9; i++) {
        const number = document.createElement('div');
                number.setAttribute('class', 'number');
                number.addEventListener('click', () => {
                currentNumber += number.textContent;
                display.textContent = currentNumber;
        });
        number.textContent = i;
        numbers.appendChild(number);
}

const zero = document.createElement('div');
                zero.setAttribute('class', 'zero');
                zero.textContent = 0;
                zero.addEventListener('click', () => {
                currentNumber += zero.textContent;
                display.textContent = currentNumber;
                });

numbers.appendChild(zero);

// Append
calculator.appendChild(display);
calculator.appendChild(divOperators);
calculator.appendChild(numbers);

divOperators.appendChild(clear);
divOperators.appendChild(btnAdd);
divOperators.appendChild(btnSubtract);
divOperators.appendChild(btnMultiply);
divOperators.appendChild(btnDivide);
divOperators.appendChild(btnResult);



