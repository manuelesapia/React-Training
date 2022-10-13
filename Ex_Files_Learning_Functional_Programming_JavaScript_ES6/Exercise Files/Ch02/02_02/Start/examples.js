const sayHello = name () => console.log('hello' + name);

const sayHello2 = sayHello;

sayHello2('Manuel');

const myFunction = true
? () => console.log('first')
: () => console.log('second');

const DEVELOPMENT = true;

const fetchDataReal = () => {


}



const fetchDataFake = () => ({
        name:'manuel',
        age:30,
});




const fetchData = DEVELOPMENT
? fetchDataFake
: fetchDataReal;





