'use strict';

const  credits = 23580;

const pricePerDroid = 3000;

let  buyDroids = prompt('How many droids do you want buy ?');

let totalPrice = buyDroids * pricePerDroid;

let balance = totalPrice - credits; 

let message;


if (buyDroids  === null) {
    message = `Canceled by user!`;
  } else if (totalPrice > credits) {
    message = `Credits dont enough on your account`;
  } else if (buyDroids <= 0) {
    message = `It was input less than 1`;
  } else {
    balance;
    message = `You buy ${buyDroids} droids, in an account left ${balance} credits`;
  }

console.log(message);