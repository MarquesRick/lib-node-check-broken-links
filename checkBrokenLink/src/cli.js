const chalk = require('chalk');

const getFileAsync = require('./index');

const path = process.argv;

const processText = async (pathFile) => {
  const result = await getFileAsync(pathFile[2]);
  console.log(chalk.yellow('lista de links'), result);
};

processText(path);
