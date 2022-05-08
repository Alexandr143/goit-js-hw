'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let  message;

let  password = prompt('Please enter correct password:');

if (password  === null) {
    message = 'Canceled by user';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcom';
  }  else {
    message = 'Enter is banned, password isn`t true!';
  }

 alert(message); 