const nums = document.querySelectorAll(".num");
const operands = document.querySelectorAll(".operand");
const func = document.querySelectorAll(".func");
const display = document.getElementById("screen");
let evalC = [];
let currentOp = null;
let newInput = null;

nums.forEach(num => num.addEventListener('click', () => {
    if (newInput) {
        display.textContent = '';
        newInput = false;
    }
    let btnNum = num.innerText;
    display.textContent = (display.innerText + btnNum);
}));

operands.forEach(oper => oper.addEventListener('click', () => {
    if (!newInput) {
        evalC.push(display.textContent);
    }
    if (evalC.length == 2){
        operate(Number(evalC[0]), Number(evalC[1]), currentOp);
    }
    switch (oper.id){
        case 'btn-plus':
            currentOp = '+';
            break;
        case 'btn-minus':
            currentOp = '-';
            break;
        case 'btn-multiply':
            currentOp = '*';
            break;
        case 'btn-divide':
            currentOp = "/";
            break;
        default:
            currentOp = '';
    }
    newInput = true;
}));

func.forEach(func => func.addEventListener('click', () => {
    switch(func.id){
        case 'btn-clear':
            clear();
            break;
        case 'btn-equal':
            evalC.push(display.textContent);
            if (evalC.length == 2) {
                operate(Number(evalC[0]), Number(evalC[1]), currentOp);
            }
            else if (evalC.length == 1 && currentOp){
                operate(Number(evalC[0]), Number(evalC[0]), currentOp);
            }
            break;
        case 'btn-percent':
            display.textContent = operate(evalC, 100, '/');
            addNumber();
    }
    newInput = true;
}));

function operate(one, two, op) {
    if (two == 0 && op == '/') {
        display.textContent = 'nope!';
        evalC = [];
        currentOp = null;
        return;
    }
    let total = 0;
    switch(op){
        case '+':
            total = (one + two);
            break;
        case '-':
            total = (one - two);
            break;
        case '*':
            total = (one * two);
            break;
        case '/':
            total = (one / two);
            break;
    }
    display.textContent = total;
    addNumber();
}

function clear(){
    display.textContent = '0';
    evalC = [];
    newInput = true;
    currentOp = null;
}

function addNumber(){
    evalC = [];
    evalC.push(display.textContent);
}