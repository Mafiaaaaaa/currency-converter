import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.cyan("\n\tWelcome to Currency Converter - by Shaheer Siddiqui\n"));
let currency_Rates = {
    'PKR': 1,
    'GBP': 0.0028677,
    'JPY': 0.55019,
    'CAD': 0.0049206,
    'AED': 0.013212,
    'USD': 0.0035976,
    'AUD': 0.0055123,
    'RUB': 0.33738,
    'TRY': 0.11620,
    'SAR': 0.013,
    'AFN': 0.25
};
let conversion = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the Currency you want to convert from",
        choices: ['PKR', 'GBP', 'JPY', 'CAD', 'AED', 'USD', 'AUD', 'RUB', 'TRY', 'SAR', 'AFN']
    },
    {
        name: "to_currency",
        type: "list",
        message: "Now Select the Currency you want to convert into",
        choices: ['PKR', 'GBP', 'JPY', 'CAD', 'AED', 'USD', 'AUD', 'RUB', 'TRY', 'SAR', 'AFN']
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter the Amount you want to convert"
    }
]);
const from_amount = currency_Rates[conversion.from_currency];
const to_amount = currency_Rates[conversion.to_currency];
const amount = conversion.Amount;
const original_amount = amount / from_amount;
const converted_amount = original_amount * to_amount;
console.log(chalk.green(`${converted_amount.toFixed(2)} ${conversion.to_currency}`));
