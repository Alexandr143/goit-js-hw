'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
 
    input = prompt('Can you please input number?');

if (input === null) {

    break;

} else if (!Number(input)) {

    alert('It was not input number');
    
} else {

    numbers.push(Number(input));

};

for (let i = 0; i < numbers.length; i+=1) {

    total +=numbers[i];
        
    };
};

console.log('Total sum of numbers is',total);