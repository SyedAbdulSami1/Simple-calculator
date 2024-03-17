import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operator to performed Operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answer);
// condition Statement
if (answer.Operator === "Addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstNumber / answer.SecondNumber);
}
else {
    console.log("Please Selcte the Correct operator");
}
