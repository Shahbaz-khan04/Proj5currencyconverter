#! /usr/bin/env node

import inquirer from "inquirer";

const usdToPkr = 228.43;
const pkrToUsd = 0.0044;
const euToPkr = 239.85;
const pkrToEu = 0.0042;
const euToUsd = 1.05;
const usdToEu = 0.95;

async function converter() {
  let answer: { CurrencyForm: string; CurrencyTo: string; Ammount: number } =
    await inquirer.prompt([
      {
        name: "CurrencyForm",
        type: "list",
        choices: ["USD", "PKR", "EU"],
        message: "Select a currency: ",
      },
      {
        name: "CurrencyTo",
        type: "list",
        choices: ["USD", "PKR", "EU"],
        message: "Select a currency: ",
      },
      {
        name: "Ammount",
        type: "input",
        message: "Enter value: ",
      },
    ]);

  switch (answer.CurrencyForm) {
    case "USD":
      switch (answer.CurrencyTo) {
        case "PKR":
          let ammount1 = answer.Ammount * usdToPkr;
          console.log(ammount1);
          break;
        case "EU":
          let ammount2 = answer.Ammount * usdToEu;
          console.log(ammount2);
          break;
        default:
          console.log(answer.Ammount);
      }
      break;

    case "PKR":
      switch (answer.CurrencyTo) {
        case "USD":
          let ammount1 = answer.Ammount * pkrToUsd;
          console.log(ammount1);
          break;
        case "EU":
          let ammount2 = answer.Ammount * pkrToEu;
          console.log(ammount2);
          break;
        default:
          console.log(answer.Ammount);
      }
      break;

    case "EU":
      switch (answer.CurrencyTo) {
        case "USD":
          let ammount1 = answer.Ammount * euToUsd;
          console.log(ammount1);
          break;
        case "PKR":
          let ammount2 = answer.Ammount * euToPkr;
          console.log(ammount2);
          break;
        default:
          console.log(answer.Ammount);
      }
      break;
  }
}
async function repeat() {
  let repeat = true;
  do {
    await converter();
    let again = await inquirer.prompt([
      {
        name: "repeat",
        type: "list",
        choices: ["Yes", "No"],
        message: "Do you want to repeat: ",
      },
    ]);
    if (again.repeat === "Yes") {
      repeat = true;
    } else repeat = false;
  } while (repeat);
}

repeat();
