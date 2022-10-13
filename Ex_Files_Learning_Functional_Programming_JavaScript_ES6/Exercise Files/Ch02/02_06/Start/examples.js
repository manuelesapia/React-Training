const createPrinter = () => {
    const myFavoriteNumber = 21;

    return () =>
    console.log(`my number is ${myFavoriteNumber}`);
}

const printer = createPrinter();
printer();