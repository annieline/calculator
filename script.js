const nums = document.querySelectorAll(".num");
const operands = document.querySelectorAll(".operand");
const display = document.getElementById("screen");
let evalC = [];
let currentOp;

nums.forEach(num => num.addEventListener('click', () => {
    let btnNum = num.innerText;
    display.textContent = (display.innerText + btnNum);
}));

operands.forEach(oper => oper.addEventListener('click', () => {
    evalC.push(display.innerText);
    if (evalC.length == 3){
        operate([...evalC]);
    }
    switch (oper.id){
        case 'add':
            currentOp = '+';
        case 'minus':
            currentOp = '-';
        case 'multiply':
            currentOp = '*';
        case 'divide':
            currentOp = "/";
        default:
            currentOp = '';
    }
    evalC.push(currentOp);
    clear();
}));

function operate(one, operand, two) {

}

function clear(){
    display.textContent = '';
}