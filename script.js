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
        displayText('5318008');


// Operators
const clear = document.createElement('button');
        clear.textContent = 'C';
        clear.setAttribute('class', 'clear');
        clear.addEventListener('click', () => {
                displayText('0');
                num1 = 0;
                currentNumber = '';
        });


const btnAdd = document.createElement('button');
        btnAdd.textContent = '+';
        btnAdd.setAttribute('class', 'add');
        btnAdd.addEventListener('click', () => {
                if (!num1) {
                        num1 = Number(currentNumber);
                        selectedOperator = '+';
                        currentNumber = '';
                } else {
                        selectedOperator = '+';
                        getResult(Number(num1), Number(currentNumber));
                        num1 = result;
                        currentNumber = '';
                }
        })


const btnSubtract = document.createElement('button');
        btnSubtract.textContent = '-';
        btnSubtract.setAttribute('class', 'subtract');
        btnSubtract.addEventListener('click', () => {
                if (!num1) {
                        num1 = Number(currentNumber);
                        selectedOperator = '-';
                        currentNumber = '';
                } else {
                        selectedOperator = '-';
                        getResult(Number(num1), Number(currentNumber));
                        num1 = result;
                        currentNumber = '';
                }
        })

const btnMultiply = document.createElement('button');
        btnMultiply.textContent = 'x';
        btnMultiply.setAttribute('class', 'multiply');
        btnMultiply.addEventListener('click', () => {
                if (!num1) {
                        num1 = Number(currentNumber);
                        selectedOperator = '*';
                        currentNumber = '';
                } else {
                        selectedOperator = '*';
                        getResult(Number(num1), Number(currentNumber));
                        num1 = result;
                        currentNumber = '';
                }
        })

const btnDivide = document.createElement('button');
        btnDivide.textContent = '/';
        btnDivide.setAttribute('class', 'divide');
        btnDivide.addEventListener('click', () => {
                if (!num1) {
                        num1 = Number(currentNumber);
                        selectedOperator = '/';
                        currentNumber = '';
                } else {
                        selectedOperator = '/';
                        getResult(Number(num1), Number(currentNumber));
                        num1 = result;
                        currentNumber = '';
                }
        })

const btnResult = document.createElement('button');
        btnResult.textContent = '=';
        btnResult.setAttribute('class', 'result');
        btnResult.addEventListener('click', () => {
                result = getResult(Number(num1), Number(currentNumber));
                displayText(result);
                currentNumber = result;
        });


// Helper functions 

function displayText(text) {
        display.textContent = text;
}


const getResult = (currentNumber, num1) => {
        switch(selectedOperator) {
                case '+':
                        result = add(num1, currentNumber);
                        displayText(result);
                        currentNumber = result;
                        return result;
                case '-':
                        result = subtract(num1, currentNumber);
                        displayText(result);
                        currentNumber = result;
                        return result;
                
                case '*':
                        result = multiply(num1, currentNumber);
                        displayText(result);
                        currentNumber = result;
                        return result;
                
                case '/':
                        result = divide(num1, currentNumber)
                        displayText(result);
                        currentNumber = result;
                        return result;
        }  
}

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
                displayText(currentNumber);
        });
        number.textContent = i;
        numbers.appendChild(number);
}

const zero = document.createElement('div');
                zero.setAttribute('class', 'zero');
                zero.textContent = 0;
                zero.addEventListener('click', () => {
                currentNumber += zero.textContent;
                displayText(currentNumber);
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



