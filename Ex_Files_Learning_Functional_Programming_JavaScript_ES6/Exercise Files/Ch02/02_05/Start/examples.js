

const creteMultiplier = y => x => x * y;

const double = creteMultiplier(2);
const triple = creteMultiplier(3);
const quadruple = creteMultiplier(4);


console.log(quadruple);

double(3)