// const numbers = [1, 2, 3, 4, 5];
// const tripleNumber =[];
// for (let i = 0; i < numbers.length; i++){
//     tripleNumber.push(numbers[i] * 3);
// };


// const pushNumber = [];

// for (let i = 0; i< numbers.length; i++){
//     pushNumber.push(numbers[i]);
// }
// //console.log(pushNumber);


// const double = x => x * 2;

// const doubleNumbers = numbers.map(double);
// console.log(doubleNumbers);



const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const sortByAsc = (x, y) => {
    if(x < y){
        return -1
    }
    if (y > x){
        return 1
    }  

    return 0;
} 

const sortByDesc = (x, y) => {
    if(y < x){
        return -1
    }
    if (x > y){
        return 1
    }  

    return 0;
} 

const sortNumberByDesc = mixedUpNumbers.sort(sortByDesc);

const sortNumberByAsc = mixedUpNumbers.sort(sortByAsc);


console.log(sortNumberByDesc);

console.log(sortNumberByAsc);
