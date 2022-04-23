const chalk = require('chalk');
const fs = require('fs');
const log = console.log;

const getFile = (pathFile) => {
  fs.readFile(pathFile, (encoding = 'utf-8'), (_, text) => {
    log(chalk.green(text));
  });
};

getFile('./files/text.md');
