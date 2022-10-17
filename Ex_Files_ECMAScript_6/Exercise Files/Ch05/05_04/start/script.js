




let person = {
    first: "david",
    hobbies: ["bike", "football", "ski"],
    printHobbies:function(){
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        })
    }
}

person.printHobbies();