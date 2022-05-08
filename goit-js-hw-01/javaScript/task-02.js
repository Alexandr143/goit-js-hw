'use strict';

const total = 100;

let  order = prompt('Please enter desired amount of goods:');

let message;

if (order === null) {
    message = 'See you We hope you`ll come back';
  } else if (order > 0 && order < total) {
    message = 'Your good is being packed it`ll be delivered soon';
  }  else {
    message = 'Goods isn`t enough, please come back later';
  }
  
  console.log(message); 