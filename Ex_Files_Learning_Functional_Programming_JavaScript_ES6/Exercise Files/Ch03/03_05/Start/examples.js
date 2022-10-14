const employees = [{
    name: 'Jane Doe',
    salary: 90000,
}, {
    name: 'Donald Jones',
    salary: 65000,
}, {
    name: 'Donna Appleseed',
    salary: 1500000,
}, {
    name: 'John Smith',
    salary: 250000,
}];

// var makesMoreThanOneMillion = [];
// for (let i = 0; i < employees.length; i++){
//     if(employees.salary[i].length > 1000000 ){
//         makesMoreThanOneMillion.push(employees.salary)
//     }
// }
// console.log(makesMoreThanOneMillion);





const makesMoreThanOneMillion = employee =>
employee.salary > 1000000;
const result = employees.some(makesMoreThanOneMillion);

console.log(result);



// const formValues = [
// "manuele",
// 'sapia',
// 'london',
// 'dev',
// ];


// const isNotEmpty = string => !!string;

// const allFieldsFilled = formValues.every(isNotEmpty);

// console.log(allFieldsFilled);
