#!/usr/bin/env node
const chalk = require('chalk');

const getFileAsync = require('./index');
const validateArrayUrl = require('./http-validation');
const path = process.argv;

const processText = async (pathFile) => {
  const result = await getFileAsync(pathFile[2]);
  if (path[3] === 'validar')
    console.log(
      chalk.yellow('links validados'),
      await validateArrayUrl(result)
    );
  else console.log(chalk.yellow('lista de links'), result);
};

processText(path);
