const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const parole = [
    "Ace",
    'beck',
    'clondon',
    'dev',
    ];

const ascending = (a, b) => {

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
} 


const descending = (a, b) => {

    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}

const sortedNumbers = parole.slice().sort(ascending);

const sortedNumbersdesc = parole.slice().sort(descending);


console.log(`Ascending: ${sortedNumbers}`);

console.log(`descending: ${sortedNumbersdesc}`);