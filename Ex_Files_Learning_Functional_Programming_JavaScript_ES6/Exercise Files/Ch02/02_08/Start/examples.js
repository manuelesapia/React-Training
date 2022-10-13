const divide = (x, y) => x / y;

const secondArgumentIsntZero = func => 
(...args) => {
    if(args[1] === 0){
        console.log("error: dividing by zero");
        return null;
    }
    return func(...args);
}


const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));

console.log(divideSafe(100, 2));