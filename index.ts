#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Lets Start Calculation");
  await sleep();
  rainbowTitle.stop();
  console.log(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    `);
}

await welcome();

async function askQustion() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "operators",
        message: "Which operatore you want to perfome? \n",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter number 1: ",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter number 2: ",
      },
    ])
    .then((ans) => {
      if (ans.operators == "Addition") {
        console.log(
          chalk.red(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`)
        );
      } else if (ans.operators == "Subtraction") {
        console.log(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`);
      } else if (ans.operators == "Multiplication") {
        console.log(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`);
      } else if (ans.operators == "Division") {
        console.log(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`);
      }
    });
}

async function startAgain() {
  do {
    await askQustion();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue? Press y or n: ",
    });
  } while (
    again.restart == "y" ||
    again.restart == "Y" ||
    again.restart == "yes" ||
    again.restart == "YES"
  );
}

startAgain();
