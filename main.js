import chalk from "chalk";
import inquirer from "inquirer";
let userBalance = 140507.0;
let pinFunc = (userPinCode) => {
    return pinFunc;
};
console.log(chalk.bold.yellow("________________________________"));
console.log("");
console.log(chalk.yellow.bold.italic("$'|") +
    " " +
    chalk.bold.magentaBright("WELCOME") +
    " " +
    chalk.blueBright.bold("TO") +
    " " +
    chalk.bold.cyanBright("EASYPAISA") +
    " " +
    chalk.greenBright.bold("AAP") +
    " " +
    chalk.yellow.bold.italic("|'$"));
console.log(chalk.bold.yellow("________________________________"));
console.log("");
let choices = await inquirer.prompt([
    {
        name: "MultiChoices",
        type: "checkbox",
        message: chalk.green.bold(`[ Please Sign Up Your Account ]`),
        choices: [chalk.blue("Sign Up")],
    },
]);
console.log("");
console.log(chalk.yellow.bold.italic("| Provide Your Persional Information |"));
console.log("");
let user_SignUp = await inquirer.prompt([
    {
        name: "signUp",
        type: "input",
        message: chalk.bold.magenta(`Select User Name `) + chalk.blue(`:`),
    },
    {
        name: "signUpnNumber",
        type: "number",
        message: chalk.bold.green("Enter Your Mobile Number :"),
    },
    {
        name: "signUpPassword",
        type: "input",
        message: chalk.bold.magenta("Select Password :") +
            " " +
            chalk.cyanBright(`(Any) `),
    },
    {
        name: "makePin",
        type: "number",
        message: chalk.bold.blueBright("Make Pin Code :"),
    },
]);
console.log("");
if (user_SignUp.signUp &&
    user_SignUp.signUpnNumber &&
    user_SignUp.signUpPassword &&
    user_SignUp.makePin) {
    console.log(chalk.bold.yellow("_________________________________________________________________________"));
    console.log(chalk.green.bold.italic(`(" Your Account Sign Up Succefully `) +
        chalk.bold.italic.magenta(` Now You Can Login Your Account ~ )`));
    console.log(chalk.bold.yellow("_________________________________________________________________________"));
    console.log("");
    console.log(chalk.yellow.bold("LOGIN :"));
    let condition = true;
    while (condition) {
        let loginAccount = await inquirer.prompt([
            {
                name: "login",
                type: "input",
                message: chalk.bold.magenta("Enter user Name :"),
            },
            {
                name: "loginNumber",
                type: "number",
                message: chalk.bold.cyan("Enter Your Number :"),
            },
            {
                name: "loginPassword",
                type: "input",
                message: chalk.bold.yellowBright("Enter Your Password :"),
            },
            {
                name: "enterPin",
                type: "number",
                message: chalk.bold.blueBright("Enter Your Pin code :"),
            },
        ]);
        console.log("");
        pinFunc((pinFunc = loginAccount.enterPin));
        if (loginAccount.login === user_SignUp.signUp &&
            loginAccount.loginNumber === user_SignUp.signUpnNumber &&
            loginAccount.loginPassword === user_SignUp.signUpPassword &&
            loginAccount.enterPin === user_SignUp.makePin) {
            console.log(chalk.yellow.bold("| WelCome ") +
                chalk.bold.cyanBright(loginAccount.login) +
                " " +
                chalk.bold.magenta("&") +
                " " +
                chalk.bold.green("Cogratulations '~'") +
                " " +
                chalk.cyan.bold("You got " +
                    chalk.green.bold(`Rs : 140507.00`) +
                    " " +
                    "of bonus on " +
                    chalk.bold.magentaBright(`sign Up`) +
                    " from lucky draw |"));
            console.log(chalk.bold.yellow("________________________________________________________________________________________________________"));
            condition = false;
            console.log(chalk.bold.blueBright.italic("Your Available Account Balance :"));
            console.log(chalk.bold.yellow("____________________________________________"));
            console.log(chalk.bold.green("RS :") + " " + chalk.bold.magentaBright(userBalance));
            console.log(chalk.bold.yellow("______________"));
            const options = await inquirer.prompt([
                {
                    name: "option",
                    type: "rawlist",
                    message: chalk.bold.green("|") +
                        chalk.bold.magentaBright("Transaction") +
                        " " +
                        chalk.bold.yellowBright("Mathod") +
                        chalk.bold.green(" |"),
                    choices: [
                        "Easy Load",
                        "Send Money",
                        "Get Loan",
                        "Pay Bills",
                        "Insurance",
                        "Check Balance",
                        "Other",
                    ],
                },
            ]);
            if (options.option === "Easy Load") {
                const easyLoad = await inquirer.prompt([
                    {
                        name: "easyLoad",
                        type: "list",
                        message: chalk.bold.yellow(`| Select Network |`),
                        choices: ["Jazz", "Telenore", "Zong", "Ufone", "Other"],
                    },
                ]);
                let condition2 = true;
                if ((easyLoad.easyLoad === "Jazz" || "Zong" || "Telenore" || "Ufone",
                    (easyLoad.easyLoad === "Other") === false)) {
                    while (condition2) {
                        let getLoad = await inquirer.prompt([
                            {
                                name: "getBalance",
                                type: "number",
                                message: chalk.bold.blue("Enter Mobile  Number :"),
                            },
                            {
                                name: "amount",
                                type: "number",
                                message: chalk.bold.cyan("Enter amount :") +
                                    " " +
                                    chalk.bold.magentaBright(`( *Minimum 100pkr )`),
                            },
                            {
                                name: "loadPin",
                                type: "number",
                                message: chalk.bold.yellowBright("To Perform This Operation Enter Your Pin Code :"),
                            },
                        ]);
                        if (getLoad.loadPin === pinFunc) {
                            if (getLoad.amount >= 100) {
                                console.log(chalk.cyan.bold("The balane of Rs :") +
                                    " " +
                                    chalk.green.bold(getLoad.amount) +
                                    " " +
                                    chalk.cyan.bold("Succefully send to") +
                                    " " +
                                    chalk.green.bold(getLoad.getBalance));
                                userBalance -= getLoad.amount;
                                console.log(chalk.bold.magentaBright("Your remaining balance is :") +
                                    " " +
                                    chalk.bold.cyan("Rs : ") +
                                    chalk.green.bold(userBalance));
                                condition2 = false;
                            }
                            else {
                                console.log(chalk.bold.red("You can't make this transation .!!") +
                                    chalk.bold.green(`( enter more than 100 or equal )` +
                                        " Then " +
                                        chalk.bold.italic.magenta(`{Re-Enter Your Number & Amount}`)));
                            }
                        }
                        else {
                            console.log(chalk.bold.red("Invalid Pin Code .!!") +
                                " " +
                                chalk.bold.green("Try Again"));
                        }
                    } //while jo
                    //2nd
                }
                else {
                    console.log(chalk.bold.blueBright("Dear User") +
                        " " +
                        chalk.bold.greenBright(loginAccount.login) +
                        " " +
                        chalk.bold.red("Sorry our Company Is'nt providing any other service") +
                        " " +
                        chalk.bold.green("| Try Again |"));
                }
                condition2 = false;
                //1st if
            }
            else if (options.option === "Send Money") {
                let sendMoney = await inquirer.prompt([
                    {
                        name: "transferMoney",
                        type: "checkbox",
                        message: chalk.bold.green.italic("| Select Transaction Mathod |"),
                        choices: ["Easy Paisa", "Jazz Cash", "Bank Account"],
                    },
                ]);
                if (sendMoney.transferMoney === "Easy Paisa" ||
                    "Jazz Cash" ||
                    "Bank Account") {
                    let condition4 = true;
                    while (condition4) {
                        let transferMoney = await inquirer.prompt([
                            {
                                name: "trasacName",
                                type: "input",
                                message: chalk.bold.magentaBright("Enter Payer Name :"),
                            },
                            {
                                name: "transferCash",
                                type: "number",
                                message: chalk.bold.blue("Enter Acccount Number :"),
                            },
                            {
                                name: "money",
                                type: "number",
                                message: chalk.bold.yellowBright("Enter Amount For This Transaction :"),
                            },
                            {
                                name: "conform",
                                type: "confirm",
                                message: chalk.redBright.italic.bold("Are You Sure You want to Make This Transaction :"),
                                default: true,
                            },
                            {
                                name: "transferPin",
                                type: "number",
                                message: chalk.blueBright.bold("Enter Your Pin Code :"),
                            },
                        ]);
                        if (transferMoney.transferPin === pinFunc) {
                            if (transferMoney.money > userBalance) {
                                console.log(chalk.bold.blueBright("Dear User") +
                                    " " +
                                    chalk.bold.greenBright(loginAccount.login) +
                                    " " +
                                    chalk.bold.red("You Dont Have Insufficient Balance For This Transaction .!!"));
                                +" " +
                                    chalk.bold.greenBright("Your Account Balance Is") +
                                    " " +
                                    chalk.cyanBright.bold(userBalance);
                            }
                            else {
                                userBalance -= transferMoney.money;
                                console.log(chalk.bold.yellow("________________________________"));
                                console.log(chalk.greenBright.bold("Transaction Receipt :"));
                                console.log(chalk.bold.yellow("________________________________"));
                                console.log(chalk.bold.blueBright("Dear User") +
                                    " " +
                                    chalk.bold.greenBright(loginAccount.login));
                                console.log(chalk.bold.cyan("The Amount of") +
                                    " " +
                                    chalk.bold.italic.magenta("Rs :") +
                                    " " +
                                    chalk.bold.green.bold(transferMoney.money) +
                                    " " +
                                    chalk.bold.cyan.bold("Successfully Send To") +
                                    " " +
                                    chalk.bold.green.bold(transferMoney.transferCash));
                                +chalk.bold.italic.magenta("Through") +
                                    " " +
                                    chalk.bold.green.italic(sendMoney.transferMoney);
                                console.log(chalk.bold.yellowBright("From :") +
                                    chalk.bold.cyan(transferMoney.trasacName));
                                console.log(chalk.bold.italic.magenta("Your Remainig Account Balance Is") +
                                    " " +
                                    chalk.bold.green.italic(userBalance));
                                condition4 = false;
                            }
                        }
                        else {
                            console.log(chalk.bold.red("Please Enter Correct Pin Code .!!"));
                            console.log(chalk.bold.blueBright("{Re- Enter Your Information}"));
                        }
                    }
                }
                else {
                    console.log(chalk.bold.blueBright("Dear User") +
                        " " +
                        chalk.bold.greenBright(loginAccount.login) +
                        " " +
                        chalk.bold.red("Sorry our Company Is'nt providing any other service") +
                        " " +
                        chalk.bold.green("| Try Again |"));
                }
            }
            else if (options.option === "Get Loan") {
                let loanCondition = true;
                while (loanCondition) {
                    let gatLoan = await inquirer.prompt([
                        {
                            name: "takingLoan",
                            type: "number",
                            message: chalk.yellow.italic.bold("Please Enter The Amount Of Loan You Want To Get :"),
                        },
                        {
                            name: "loanConfirm",
                            type: "confirm",
                            message: chalk.bold.redBright("Are you sure you want to get loan .?"),
                        },
                        {
                            name: "loanPin",
                            type: "number",
                            message: chalk.cyan.bold("Enter Your Pin Code :"),
                        },
                    ]);
                    if (gatLoan.takingLoan <= 50000) {
                        console.log("");
                        console.log(chalk.bold.blueBright("Dear User") +
                            " " +
                            chalk.bold.greenBright(loginAccount.login));
                        console.log(chalk.yellow.bold("Congratulations .!") +
                            " " +
                            chalk.bold.magenta("You Got Loan Of") +
                            " " +
                            chalk.cyan.bold("RS : ") +
                            chalk.bold.green(gatLoan.takingLoan));
                        userBalance += gatLoan.takingLoan;
                        console.log(chalk.bold.greenBright("Your New Account Balance Is :") +
                            " " +
                            chalk.blue.bold(userBalance));
                        loanCondition = false;
                        //last condition
                    }
                    else {
                        console.log(chalk.red.bold.italic("Your Account Limit Reached .!! ") +
                            " " +
                            chalk.bold.italic.blueBright(`( Try To Get Lower Than 50000 )`));
                        let confirmLoan = await inquirer.prompt([
                            {
                                name: "confirmLoan",
                                type: "confirm",
                                message: chalk.bold.green("Do Yo Want To Try Again .?"),
                                default: true,
                            },
                        ]);
                        confirmLoan;
                    }
                }
            }
            else if (options.option === "Pay Bills") {
                let payBills = await inquirer.prompt([
                    {
                        name: "payBill",
                        type: "list",
                        message: chalk.bold.italic.magenta("| Select Catagory |"),
                        choices: ["Electricity", "Sui Gas", "Telephone", "Wifi", "Other"],
                    },
                ]);
                if (payBills.payBill === "Electricity" ||
                    "Sui Gas" ||
                    "Telephone" ||
                    "Wifi") {
                    let billOptions = await inquirer.prompt([
                        {
                            name: "paymentClint",
                            type: "input",
                            message: chalk.bold.greenBright("Enter Your Name :"),
                        },
                        {
                            name: "bilNumber",
                            type: "number",
                            message: chalk.magentaBright.bold("Enter Bill Number :"),
                        },
                        {
                            name: "billAmount",
                            type: "number",
                            message: chalk.bold.cyanBright("Enter Bill Amount :"),
                        },
                        {
                            name: "conformBill",
                            type: "confirm",
                            message: chalk.redBright.italic.bold("Are You Sure You Want To Pay Bill .?"),
                        },
                        {
                            name: "enterPin",
                            type: "number",
                            message: chalk.bold.greenBright("Enter Your Pin Code :"),
                        },
                    ]);
                    if (billOptions.paymentClint &&
                        billOptions.bilNumber &&
                        billOptions.billAmount &&
                        billOptions.conformBill &&
                        billOptions.enterPin === pinFunc) {
                        console.log(chalk.bold.blueBright("Dear User") +
                            " " +
                            chalk.bold.greenBright(loginAccount.login));
                        console.log(chalk.bold.yellow("The Bill Of") +
                            " " +
                            chalk.green.bold(payBills.payBill) +
                            " " +
                            chalk.bold.magenta("Succefully Paid"));
                        console.log(chalk.bold.yellow("______________________"));
                        console.log(chalk.blue.bold("< Bill Recept >"));
                        console.log(chalk.bold.yellow("______________________"));
                        console.log(chalk.yellow.bold("Bill Payer") +
                            " " +
                            chalk.green.bold(billOptions.paymentClint) +
                            chalk.magenta.bold(" | ") +
                            chalk.bold.blue("Amount Of") +
                            " " +
                            chalk.cyan.bold("RS ") +
                            chalk.bold.green(billOptions.billAmount) +
                            chalk.magenta.bold(" | ") +
                            chalk.bold.blue("Bill No :") +
                            " " +
                            chalk.bold.green(billOptions.bilNumber) +
                            chalk.magenta.bold(" | "));
                        console.log(chalk.bold.yellow("__________________________________________________"));
                        console.log(chalk.bold.magenta.italic("Transaction Maker") +
                            " " +
                            chalk.bold.cyan.italic("< Asad Shabir >") +
                            chalk.bold.yellowBright(" Softwear Compamny"));
                        console.log(chalk.bold.yellow("__________________________________________________"));
                    }
                    else {
                    }
                }
                else {
                    console.log(chalk.bold.blueBright("Dear User") +
                        " " +
                        chalk.bold.greenBright(loginAccount.login) +
                        " " +
                        chalk.bold.red("Sorry our Company Is'nt providing any other service") +
                        " " +
                        chalk.bold.green("| Try Again |"));
                }
            }
            else if (options.option === "Insurance") {
                console.log(chalk.bold.blueBright("Dear User") +
                    " " +
                    chalk.bold.greenBright(loginAccount.login) +
                    " " +
                    chalk.bold.cyan.italic("This Option Is not available one that time |") +
                    " " +
                    chalk.bold.green(" | It May Come In Future `~` "));
            }
            else if (options.option === "Check Balance") {
                console.log(chalk.bold.blueBright("Dear User") +
                    " " +
                    chalk.bold.greenBright(loginAccount.login));
                console.log(chalk.bold.italic.yellowBright("Your Available Account Blance is") +
                    " " +
                    chalk.bold.italic.green(userBalance));
            }
            else {
                console.log(chalk.bold.blueBright("Dear User") +
                    " " +
                    chalk.bold.greenBright(loginAccount.login) +
                    " " +
                    chalk.bold.red("Sorry our Company Is'nt providing any other service") +
                    " " +
                    chalk.bold.green("| Try Again |"));
            }
        }
        else {
            console.log(chalk.bold.red("Invalid UserName or Number or Password or Pin .!!") +
                " " +
                chalk.blue.bold("try again ."));
            console.log("");
            let option = await inquirer.prompt([
                {
                    name: "tryAgain",
                    type: "confirm",
                    message: chalk.magenta.bold("Do you want to try again login process .?"),
                    default: true,
                },
            ]);
            console.log("");
            if (option.tryAgain === true) {
                console.log(chalk.blue.bold(`Login Again | :`));
                option = false;
            }
            else {
                condition = false;
            }
        }
    }
    console.log("");
}
else {
    console.log(chalk.bold.red("SignUp Faild .!! Please provide valid information"));
}
