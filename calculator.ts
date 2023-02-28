import inquirer from "inquirer";

const answers:{numberOne:number, numberTwo:number, operator:string} = await inquirer.prompt([
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

const {numberOne, numberTwo,operator} = answers ;

if(numberOne && numberTwo && operator){
    let result:number=0;
    if(operator=="+"){
       result = numberOne + numberTwo;

    }

    else if(operator=="-"){
        result = numberOne - numberTwo;
 
     }

     else if(operator=="/"){
        result = numberOne / numberTwo;
 
     }

     else if(operator=="*"){
        result = numberOne * numberTwo;
 
     }

     console.log("Your result Is", result)

    }
    
    else{
        console.log("Kindly Enter A Valid Value");
     }
