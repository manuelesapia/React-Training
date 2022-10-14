const numbers = [1, 2, 3, 4, 5];
const tripleNumber =[];
for (let i = 0; i < numbers.length; i++){
    tripleNumber.push(numbers[i] * 3);
};


const pushNumber = [];

for (let i = 0; i< numbers.length; i++){
    pushNumber.push(numbers[i]);
}
//console.log(pushNumber);


const double = x => x * 2;

const doubleNumbers = numbers.map(double);
console.log(doubleNumbers);
