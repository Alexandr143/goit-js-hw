'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
   
    let passwordLength = login.length;
    
    return passwordLength < 4 || passwordLength > 16
    
    };

const isLoginUnique = function(allLogins, login) {
   
    return allLogins.includes(login);
      
    };

const addLogin = function(allLogins, login) {

    if (isLoginValid (login)) {

        return 'Error! The login has to be between 4 and 16 symbols';

    } else if (isLoginUnique(allLogins, login)) { 
        
        return 'The login there already is';
    
    } else {

        allLogins.push(login); 

        return 'The login was successfully added';

    };    
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'




