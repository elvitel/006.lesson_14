let numbers = '';
for (let number1 = 20; number1 <= 30; number1 += 0.5) {
    numbers = numbers + number1 + ' ';    
}
console.log(numbers);


let ua = 27;
let sumUa;
for (let us = 10; us <= 100; us += 10) {
    sumUa = us * ua;
    console.log(sumUa);
}


let numberN = 100;
for (let number3 = 1; number3 <= 100; number3++) {
    if (number3 * number3 <= numberN) {
        console.log(number3);
    }
}


let number4 = 29;
let numberPrime; 
if (number4 <= 1) {
    numberPrime = 'Not a prime number';
}   
for (let div = 2; div <= number4; div++) {
    if (number4 % div === 0 && div < number4) {
        numberPrime = 'Not a prime number'; break;
    } 
    else {
        numberPrime = 'A prime number'; 
    }
}
console.log(numberPrime);
 

let number5 = 729;
let result;
for (let expon = 0; number5 / 3 ** expon > 0; expon++) {
    if (number5 / 3 ** expon === 1) {
        result = 'Possible'; break;
    }
    else {
        result = 'Impossible';
    }
}
console.log(result);

