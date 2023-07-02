let operandLeft = 0;
let operandRight = 0;
let sign = null;
//This will give us a nodelist containing reference to all mathching selectors
let numsBtns = document.querySelectorAll('.nums');
let display = document.querySelector('.output');
let signChosen = document.querySelectorAll('.operator');
let equals = document.querySelector('.equalsSign');
let clearBtn = document.querySelector('.row5-item3');

numsBtns.forEach((e) => e.addEventListener('mousedown', numsListen));
signChosen.forEach((e) => e.addEventListener('mousedown', operatorListen))
equals.addEventListener('mousedown', equalsListen);
clearBtn.addEventListener('mousedown', clearListen);

function numsListen(e){
    display.textContent += e.target.textContent;

}

function operatorListen(e){
    display.textContent += e.target.textContent;
    signChosen.forEach((e) => e.disabled = true);
}

function equalsListen(){
    let unprocessedString = display.textContent;
    let processedString = unprocessedString.split(/[\-+\u00F7\\\u00D7]/);
    let operator = unprocessedString.search(/[^.\w]/)
    console.log(operator);
    sign = unprocessedString[operator];
    operandLeft = processedString[0];
    console.log(operandLeft);
    operandRight = processedString[1];
    console.log(operandRight);
    console.log(sign);

    operandLeft = Number(operandLeft);
    operandRight = Number(operandRight);

    operate(operandLeft, sign, operandRight);
}

function clearListen(){
    display.textContent = "";
    return;
}

function operate(operand1, operator, operand2){
    if(operator === '+'){
        add(operand1, operand2);
    }
    if(operator === '-'){
        subtract(operand1, operand2);
    }
    if(operator === '\u00D7'){
        multiply(operand1, operand2);
    }
    if(operator === '\u00F7'){
        divide(operand1, operand2);
    }

    signChosen.forEach((e) => e.disabled = false);
    
    return;
}

function add(operand1, operand2){
    let addResult = operand1 + operand2;
    console.log(addResult);
    display.textContent = addResult;
    return;
}

function subtract(operand1, operand2){
    let subResult = operand1 - operand2;
    display.textContent = subResult;
    return;
}

function multiply(operand1, operand2){
    let multiplyResult = operand1 * operand2;
    console.log(multiplyResult);
    display.textContent = multiplyResult;
    return;
}

function divide(operand1, operand2){
    let divideResult = operand1 / operand2;
    divideResult = divideResult.toFixed(2);
    display.textContent = divideResult;
    return;
}
