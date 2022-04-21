const chalk = require("chalk");
const log = console.log;

// uso de template strings e placeholders
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);
