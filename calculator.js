"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly Enter The Number That You Want"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly Enter The Number That You Want"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*"],
        message: "Kindly Select Any Operator"
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator == "+") {
        result = numberOne + numberTwo;
    }
    else if (operator == "-") {
        result = numberOne - numberTwo;
    }
    else if (operator == "/") {
        result = numberOne / numberTwo;
    }
    else if (operator == "*") {
        result = numberOne * numberTwo;
    }
    console.log("Your result Is", result);
}
else {
    console.log("Kindly Enter A Valid Value");
}
