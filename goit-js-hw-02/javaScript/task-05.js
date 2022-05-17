'user strict';

const SPAM = 'spam'; 

const SALE = 'sale';

const checkForSpam = function(message) { 
   
   return message.toLowerCase().includes(SPAM) || message.toLowerCase().includes(SALE);

  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true