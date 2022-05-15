'user strict';

let inx;

const logItems = function(array) {
    
    for (let item of array) {
     
     inx = array.indexOf(item) + '-' + item;
     
     console.log(inx);

    };
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);