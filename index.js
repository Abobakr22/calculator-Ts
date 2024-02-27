"use strict";
// npm init -y     to create package.json
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("please enter the First Number:   ");
    var operator = (0, readline_sync_1.question)("please enter the oprtator :   ");
    var secondStr = (0, readline_sync_1.question)("please enter the second Number:   ");
    var validInputs = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInputs);
    if (validInputs) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("the result is = ".concat(result, " "));
    }
    else {
        console.log("not valid");
        main();
    }
}
function isNumber(str) {
    var mayBeNum = parseInt(str);
    var isNum = Boolean(!isNaN(mayBeNum));
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "/":
        case "*":
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "/":
            return firstNum / secondNum;
        case "*":
            return firstNum * secondNum;
    }
}
main();
