

class Vehicle {
    constructor(description, wheels){
        this.description = description;
        this.wheels = wheels;
    }
    describeYourself(){
        console.log(`I am ${this.description} with ${this.wheels} wheels.`);
    }

}

let coolVan = new Vehicle ("cool ski van", 4);

console.log(coolVan);

coolSki.describeYourself();