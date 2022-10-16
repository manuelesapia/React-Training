const person = {
    name: 'Jimmy Smith',
    age: 40,
    hairColor: 'brown',
    eyeColor: 'blue',
};

const careerData = {
    title: 'developer',
    company: 'ABC Software',
};

const personWithCareerData = {
    ...careerData,
    ...person,
};

const updates = {
    name: "Manuele sapia",
};


const updatedPerson = {
...person,
...updates,
};


console.log(updatedPerson);