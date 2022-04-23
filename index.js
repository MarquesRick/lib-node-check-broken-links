const chalk = require('chalk');
const fs = require('fs');
const log = console.log;

const errorHandling = (error) => {
  throw new Error(chalk.red(error.code, 'No file in path!'));
};

const getFile = (pathFile) => {
  fs.readFile(pathFile, (encoding = 'utf-8'), (error, text) => {
    if (error) errorHandling(error);
    log(chalk.green(text));
  });
};

getFile('./files/text.md');
