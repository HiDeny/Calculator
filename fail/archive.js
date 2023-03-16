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
                num1 = null;
                result = 0;
                currentNumber = '';
        });


const btnAdd = document.createElement('button');
        btnAdd.textContent = '+';
        btnAdd.setAttribute('class', 'add');
        btnAdd.addEventListener('click', () => {
                selectedOperator = 'add';
                if (!num1){
                        num1 = Number(display.textContent);
                        currentNumber = '';
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                } else {
                        currentNumber = Number(display.textContent);
                        num1 = getResult(selectedOperator, num1, currentNumber);
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                }
        })


const btnSubtract = document.createElement('button');
        btnSubtract.textContent = '-';
        btnSubtract.setAttribute('class', 'subtract');
        btnSubtract.addEventListener('click', () => {
                selectedOperator = 'subtract';
                if (!num1){
                        num1 = display.textContent;
                        currentNumber = '';
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                } else {
                        num1 = getResult(selectedOperator, num1, currentNumber);
                        currentNumber = '';
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                }
        })

const btnMultiply = document.createElement('button');
        btnMultiply.textContent = 'x';
        btnMultiply.setAttribute('class', 'multiply');
        btnMultiply.addEventListener('click', () => {
                selectedOperator = 'multiply';
                if (!num1){
                        num1 = display.textContent;
                        currentNumber = '';
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                } else {
                        num1 = getResult(selectedOperator, num1, currentNumber);
                        currentNumber = '';
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                }
        })

const btnDivide = document.createElement('button');
        btnDivide.textContent = '/';
        btnDivide.setAttribute('class', 'divide');
        btnDivide.addEventListener('click', () => {
                selectedOperator = 'divide';
                if (!num1){
                        num1 = display.textContent;
                        currentNumber = '';
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                } else {
                        num1 = getResult(selectedOperator, num1, currentNumber);
                        currentNumber = '';
                        console.log(selectedOperator);
                        console.log(num1);
                        console.log(currentNumber);
                        console.log(result);
                }
        })

const btnResult = document.createElement('button');
        btnResult.textContent = '=';
        btnResult.setAttribute('class', 'result');
        btnResult.addEventListener('click', () => {
                getResult(selectedOperator, num1, currentNumber);
                currentNumber = '';
                console.log(selectedOperator);
                console.log(num1);
                console.log(currentNumber);
                console.log(result);
        });


// Helper functions 

function displayText(text) {
        display.textContent = text;
}


const getResult = (operator, num1, currentNumber) => {
        num1 = Number(num1);
        currentNumber = Number(currentNumber);
        if (operator, num1, currentNumber) {
                if (operator === 'add') {
                        result = add(num1, currentNumber);
                        displayText(result);
                        num1 = result;
                        return num1, currentNumber;

                } else if (operator === 'subtract'){
                        result = subtract(num1, currentNumber);
                        displayText(result);
                        num1 = result;
                        currentNumber = '';
                        return num1, currentNumber;;

                } else if (operator === 'multiply'){
                        result =  multiply(num1, currentNumber);
                        displayText(result);
                        num1 = result;
                        currentNumber = '';
                        return num1, currentNumber;;

                } else if (operator === 'divide'){
                        result = divide(num1, currentNumber);
                        displayText(result);
                        num1 = result;
                        currentNumber = '';
                        return num1, currentNumber;;
                }
                
        } 
}

// Numbers
const numbers = document.createElement('div');
        numbers.setAttribute('class', 'numbers');

const divOperators = document.createElement('div');
        divOperators.setAttribute('class', 'divOperators');

function createKeyPad () {
        for (let i = 1; i <= 9; i++) {
                const number = document.createElement('button');
                        number.setAttribute('class', 'number');
                        number.addEventListener('click', () => {
                        currentNumber += number.textContent;
                        displayText(currentNumber);
                });
                number.textContent = i;
        }
        const zero = document.createElement('button');
                zero.setAttribute('class', 'number');
                zero.textContent = 0;
                zero.addEventListener('click', () => {
                        currentNumber += zero.textContent;
                        displayText(currentNumber);
                });

}


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



