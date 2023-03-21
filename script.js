// Variables
let operator = null;
let num1 = null;
let num2 = null;
let result = null;
let displayValue = '';

// Functions
const operate = (a, b) => {
    if(operator === 'add') {
        result = a + b;
    } else if (operator ==='subtract') {
        result = a - b;
    } else if (operator ==='multiply') {
        result =  a * b;
    } else if (operator ==='divide') {
        if (num2 === 0) {
                result = 'Error';
        } else {
                result = a / b;
        }
        
    }
    btnDecimal.removeAttribute('disabled', '');
    return result;
}


const displayText = (text) => {
        if (!text) {
                display.textContent = "Error";
        }
        text = text.toString();
        if (text.length > 9) {
                text = text.substring(0, 9);
        }
        display.textContent = text;

};


const clear = () => {
    operator = null;
    num1 = null;
    num2 = null;
    result = null;
    displayValue = '';
    btnDecimal.removeAttribute('disabled', '');
    displayText('0');
}

const undo = () => {
    displayValue = '';
    displayText('0');
}

const addDecimal = () => {
        if (displayValue.includes('.') || !displayValue) {
                return;
        } else {
                displayValue += '.';
                displayText(displayValue);
        }
        
}

const plusMinus = () => {
        if (displayValue) {
                if (!displayValue.includes('-')) {
                        displayValue = '-' + displayValue;
                        displayText(displayValue);
                        console.log(displayValue);
                } else {
                        displayValue = displayValue.replace('-', '');
                        displayText(displayValue);
                        console.log(displayValue);
                }
        }
}

const setOperator = (event) => {
        if (event.type == 'click') {
                operator = event.target.classList[1];
        } else if (event.type == 'keydown') {
                if (event.key == "+") {
                        operator = 'add';
                } else if (event.key == '=' || event.key == 'Enter') {
                        operator = 'equals';
                } else if (event.key === '/') {
                        operator = 'divide';
                } else if (event.key == 'x' || event.key == '*') {
                        operator = 'multiply';
                } else if (event.key == '-') {
                        operator = 'subtract';
                }
        }
}

// Algorithm
const clickOnOperator = (event) => {
        if (!num1) {
                num1 = Number(displayValue);
                setOperator(event);
                console.log(operator);
                displayValue = '';
                if (operator === 'equals') {
                        clickOnEquals(); 
                }
        } else {
                clickOnEquals();
                setOperator(event);
        }
}

const clickOnEquals = () => {
    num2 = Number(displayValue);
    operate(Number(num1), Number(num2)); 
    num1 = result;
    displayText(result);
    displayValue = '';
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
        btnDecimal.setAttribute('class', 'number decimal');
        

function createKeyPad() {
        for (let i = 9; i >= 0; i--) {
                const number = document.createElement('button');
                        number.setAttribute('class', `number Digit${i}`);
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
clear();
btnClear.addEventListener('click', clear);
btnPlusMinus.addEventListener('click', plusMinus)
btnUndo.addEventListener('click', undo);
btnDivide.addEventListener('click', clickOnOperator);
btnMultiply.addEventListener('click', clickOnOperator);
btnSubtract.addEventListener('click', clickOnOperator);
btnAdd.addEventListener('click', clickOnOperator);
btnEquals.addEventListener('click', clickOnOperator);
btnDecimal.addEventListener('click', addDecimal);

//Keyboard support 
window.addEventListener('keydown', (e) => {
        let activeKey = e.code;
        if (activeKey.includes('Digit')) {
                number = document.querySelector(`.${e.code}`);
                displayValue += number.textContent;
                displayText(displayValue);
        } else if (
                e.key == "+"  ||
                e.key == '='  || 
                e.key == 'Enter'  || 
                e.key === '/' || 
                e.key == 'x'  || 
                e.key == '*'  || 
                e.key == '-'
                ) {
                clickOnOperator(e);
        } else if (e.key == 'Backspace') {
                undo();
        } else if (e.key == ',') {
                addDecimal();
        } else if (e.code == 'KeyC') {
                clear();
        } else if (e.code == 'Backquote') {
                plusMinus();
        } else {
                console.log(e.key);
                console.log(e.code);
        }
});