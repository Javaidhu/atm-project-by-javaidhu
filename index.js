import inquirer from "inquirer";
let myBalance = 215000;
let isContinu = true;
const pinCode = 4321;
const message = "Welcome to ATM Bank";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Enter your pin"
});
if (pin_ans.ans === 4321) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an option.",
            type: "list",
            choices: ["Current Account", "Saving Account",]
        }
    ]);
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Cash withdraw", "Fast Cash", "Balance Inquiry", "Deposit", "Exit"]
        });
        // ....................Deposit................
        if (ans.list === "Deposit") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposit_amount",
                message: "Enter your amount"
            });
            if (ans.Deposit_amount > 0) {
                myBalance = myBalance + ans.Deposit_amount;
                console.log("Your current balance is", myBalance);
            }
        }
        // ..............withdraw..........................
        else if (ans.list === "Cash withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "withdraw_amount",
                message: "Enter your amount"
            });
            if (ans.withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.withdraw_amount;
                console.log("Your current balance is", myBalance);
            }
            else {
                console.log("Insufficient balance");
            }
        }
        // ..........Fast Cash............
        else if (ans.list === "Fast Cash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast_cash",
                message: "Select any option",
                choices: ["500", "1000", "20000", "25000", "50000"]
            });
            if (ans.fast_cash <= myBalance) {
                if (ans.fast_cash === "500") {
                    myBalance = myBalance - ans.fast_cash;
                    console.log("Your current balance is", myBalance);
                }
                else if (ans.fast_cash === "1000") {
                    myBalance = myBalance - ans.fast_cash;
                    console.log("Your current balance is", myBalance);
                }
                else if (ans.fast_cash === "20000") {
                    myBalance = myBalance - ans.fast_cash;
                    console.log("Your current balance is", myBalance);
                }
                else if (ans.fast_cash === "25000") {
                    myBalance = myBalance - ans.fast_cash;
                    console.log("Your current balance is", myBalance);
                }
                else if (ans.fast_cash === "50000") {
                    myBalance = myBalance - ans.fast_cash;
                    console.log("Your current balance is", myBalance);
                }
            }
        }
        // ...............Balance Inquiry...............
        else if (ans.list === "Balance Inquiry") {
            console.log(`Your current balance is: ${myBalance}`);
        }
        // ...................while condition..................
        let while_ans = await inquirer.prompt({
            type: "list",
            name: "while_list",
            message: "Do you want to continue",
            choices: ["Yes", "No"]
        });
        if (while_ans.while_list === "No") {
            isContinu = false;
        }
    } while (isContinu);
}
else {
    console.log("Your pin code is incorrect");
}
