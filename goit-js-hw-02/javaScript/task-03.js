'user strict';

const findLongestWord = function(str) {
    
    let strSplit = str.split(' ');

    let longestWord = strSplit[0]; 

    // for (let i of strSplit) {
    //     if(i.length > longestWord.length){
    //       longestWord = i;
    //     };
    // };

    for (let i = 0; i < strSplit.length; i+=1) {

        if(strSplit[i].length > longestWord.length){

            longestWord = strSplit[i];

        };

    };

     return longestWord;
    
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'

