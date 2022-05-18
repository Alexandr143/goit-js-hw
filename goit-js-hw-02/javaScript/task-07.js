'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
   
    let passwordLength = login.length;
    
    if (passwordLength < 4 || passwordLength > 16) {
    
        return 'Error! The login has to be between 4 and 16 symbols';
        
    };
    
    return passwordLength;
    
    };

const isLoginUnique = function(allLogins, login) {
   
    if (allLogins.includes(login)){
    
        return 'The login there already is'
    };
    
    return 'Please input other password';
      
    };

const addLogin = function(allLogins, login) {

    isLoginValid ();
    isLoginUnique ();
    login.push(allLogins); 

    return 'The login was successfully added';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'




