const validator = require("validator");
const chalk = require("chalk");
const mail = validator.isEmail("hello@gmail.protonmail");

console.log(chalk.red(mail));
