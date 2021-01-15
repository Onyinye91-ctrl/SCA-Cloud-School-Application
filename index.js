#!/usr/bin/env node

const chalk  = require('chalk');
const clear = require('clear');
const figlet = require('figlet');



clear();

console.log(
  chalk.greenBright(figlet.textSync("CLI -APP", { horizontalLayout: "full" }))
);



