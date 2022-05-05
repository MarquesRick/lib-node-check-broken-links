const chalk = require('chalk');
const fs = require('fs');
const log = console.log;

const errorHandling = (error) => {
  throw new Error(chalk.red(error.code, 'No file in path!'));
};

const extractLink = (text) => {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const result = [];
  let temp;
  while ((temp = regex.exec(text)) != null) result.push({ [temp[1]]: temp[2] });

  return result.length === 0 ? 'not found link' : result;
};

//method synchronous
// const getFile = (pathFile) => {
//   fs.readFile(pathFile, (encoding = 'utf-8'), (error, text) => {
//     if (error) errorHandling(error);
//     log(chalk.green(text));
//   });
// };

//method asynchronous - 1
// const getFileAsync = (pathFile) => {
//   fs.promises
//     .readFile(pathFile, (encoding = 'utf-8'))
//     .then((text) => log(text))
//     .catch((error) => errorHandling(error));
// };

//method asynchronous - 2
const getFileAsync = async (pathFile) => {
  try {
    const text = await fs.promises.readFile(pathFile, (encoding = 'utf-8'));
    return JSON.stringify(extractLink(text));
  } catch (error) {
    errorHandling(error);
  } finally {
    log(chalk.blue('operation completed!'));
  }
};

module.exports = getFileAsync;
