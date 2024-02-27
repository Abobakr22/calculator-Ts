// npm init -y     to create package.json

import { question } from "readline-sync";

type operator = "+" | "-" | "/" | "*";

function main(): void {
	const firstStr: string = question(`please enter the First Number:   `);
	const operator: string = question(`please enter the oprtator :   `);
	const secondStr: string = question(`please enter the second Number:   `);

	const validInputs: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
	// console.log(validInputs);

	if (validInputs) 
    {
		const firstNum: number = parseInt(firstStr);
		const secondNum: number = parseInt(secondStr);
		const result = calculate(firstNum, operator as operator, secondNum);
		console.log(`the result is = ${result} `);
	} 
    else 
    {
		console.log("not valid");
		main();
	}
}

function isNumber(str: string): boolean
{
	const mayBeNum = parseInt(str);
	const isNum: boolean = Boolean(!isNaN(mayBeNum));
	return isNum;
}

function isOperator(operator: string): boolean 
{
	switch (operator) 
    {
		case "+":
		case "-":
		case "/":
		case "*":
			return true;
		default:
			return false;
	}
}

function calculate(firstNum: number, operator: operator, secondNum: number) 
{
	switch (operator) 
    {
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
