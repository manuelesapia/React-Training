
// const words = [
//     'hello',
//     'goodbye',
//     'the',
//     'antarctica',
// ];
// var wordslongerthanfive = [];
// for (let i = 0; i < words.length; i++){
//     if(words[i].length > 5){
//         wordslongerthanfive.push(words[i])
//     }
// }

//console.log(wordslongerthanfive);

const words = [
    'hello',
    'goodbye',
    'the',
    'antarctica',
];

const createLengthTest = minLength =>
 word => word.length > minLength;

 const longWords = words.filter(createLengthTest(5));

console.log(longWords);








// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evenNumbers = [];
// for (let i = 0; i < numbers.length; i++){

//     if (numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i]);
//      }
// }

