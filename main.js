/* 
Your application should:
1. Use the readline-sync node module to ask users questions and collect their
responses.
2. Prompt the user for their name and greet them.
3. Use readline-sync.question() to ask the user 5 questions that test their
knowledge of Values, Data Types, and Operations.
○ At least one of your questions should prompt the user for a number.
4. Store the user’s answers in variables.
5. Print the value of those answers back to the user.*/

const readline = require("readline-sync");

let name = readline.question("What is your name?");
console.log("Howdy, " + name + "!");
let conversionTypes = readline.questionInt(
  "1. Fill in the blank: There are ___ MAIN types of Data Types conversions. "
);
let valueDefines = readline.question("2. What does a value define? ");
let operationCamel = readline.question(
  "3. What is the most common naming convention for variables? "
);
let oldVar = readline.question(
  "4. What is the deprecated predecesor to 'const' and 'let'? "
);
let boolean1 = readline.question("5. What data type is either true or false? ");
let comboLog =
  name +
  ", you answered: 1." +
  conversionTypes +
  " / 2." +
  valueDefines +
  " / 3." +
  operationCamel +
  " / 4." +
  oldVar +
  " / 5." +
  boolean1;

console.log(comboLog);

let question = readline.question("Are those your final answers? (Yes/No) - ");

console.log("You answered: " + question + ".  Goodbye, " + name);
