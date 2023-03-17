// Variables
let operator = null;
let num1 = null;
let num2 = 0;
let result = null;
let displayValue = '';

// Functions 
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const operate = (a, b) => {
    if(operator === 'add') {
        result = add(a,b);
    } else if (operator ==='subtract') {
        result = subtract(a,b);
    } else if (operator ==='multiply') {
        result = multiply(a,b);
    } else if (operator ==='divide') {
        result = divide(a,b);
    }
    return result;
}


const displayText = (number) => display.textContent = number;


const clear = () => {
    operator = null;
    num1 = null;
    num2 = 0;
    result = null;
    displayValue = '';
    displayText(displayValue);
}

const undo = () => {
    displayValue = '';
    displayText(displayValue);
}

const addDecimal = () => {

}

// Algorithm

// else if (operator === 'equals' && (!num1 || !num2 || !operator)) {
//         displayText('Error, something is missing!');
//     }


const clickOnOperator = (event) => {
    if (!num1) {
        num1 = displayValue;
        operator = event.target.classList[1];
        displayValue = '';
    } else {
        clickOnEquals();
        operator = event.target.classList[1];
    }
    // QuickTest
    console.log(operator);
    console.log(num1);
    console.log(num2);
    console.log(result);
    console.log(displayValue);
}

const clickOnEquals = () => {
    num2 = displayValue;
    operate(Number(num1), Number(num2));
//     if ((operator === 'divide') && (num1 === Infinity || num2 == 0)) {
//         displayText('Error, division by 0!');
//         return;
//     } 
    if (result === Infinity) {
        displayText('Error');
        return;
    } else {
        num1 = result;
        displayText(result);
        displayValue = '';
    }
}

// DOM elements
const calculator = document.querySelector('#calculator');

const display = document.createElement('div');
        display.setAttribute('class', 'display');

const container = document.createElement('div');
        container.setAttribute('class', 'container');

const btnClear = document.createElement('button');
        btnClear.textContent = 'C';
        btnClear.setAttribute('class', 'opr clear');
    
const btnPlusMinus = document.createElement('button');
        btnPlusMinus.textContent = '+/-';
        btnPlusMinus.setAttribute('class', 'opr plusMinus');
    
const btnUndo = document.createElement('button');
        btnUndo.textContent = 'Undo';
        btnUndo.setAttribute('class', 'opr undo');

const btnDivide = document.createElement('button');
        btnDivide.textContent = '/';
        btnDivide.setAttribute('class', 'opr divide');

const btnMultiply = document.createElement('button');
        btnMultiply.textContent = 'x';
        btnMultiply.setAttribute('class', 'opr multiply');

const btnSubtract = document.createElement('button');
        btnSubtract.textContent = '-';
        btnSubtract.setAttribute('class', 'opr subtract');

const btnAdd = document.createElement('button');
        btnAdd.textContent = '+';
        btnAdd.setAttribute('class', 'opr add');

const btnEquals = document.createElement('button');
        btnEquals.textContent = '=';
        btnEquals.setAttribute('class', 'opr equals');

const btnDecimal = document.createElement('button');
        btnDecimal.textContent = ',';
        btnDecimal.setAttribute('class', 'decimal');

function createKeyPad() {
        for (let i = 9; i >= 0; i--) {
                const number = document.createElement('button');
                        number.setAttribute('class', `number${i}`);
                        number.addEventListener('click', () => {
                        displayValue += number.textContent;
                        displayText(displayValue);
                });
                number.textContent = i;
                container.appendChild(number);
        }
}


// Append DOM elements
calculator.appendChild(display);
calculator.appendChild(container);
container.appendChild(btnClear);
container.appendChild(btnPlusMinus);
container.appendChild(btnUndo);
container.appendChild(btnDivide);
container.appendChild(btnMultiply);
container.appendChild(btnSubtract);
container.appendChild(btnAdd);
container.appendChild(btnEquals);
createKeyPad();
container.appendChild(btnDecimal);


// Connect functions to DOM

btnClear.addEventListener('click', clear);
// btnPlusMinus
btnUndo.addEventListener('click', undo);
btnDivide.addEventListener('click', clickOnOperator);
btnMultiply.addEventListener('click', clickOnOperator);
btnSubtract.addEventListener('click', clickOnOperator);
btnAdd.addEventListener('click', clickOnOperator);
btnEquals.addEventListener('click', clickOnOperator);
// btnDecimal