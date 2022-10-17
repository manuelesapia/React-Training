const vacation = {
    destination: "peru",
    travelers: 2,
    activity:"skiing",
    cost:"so much"
};

function marketing({destination, activity }){
    return `come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation));




const sandwich = {
    title:"rubben",
    price: 7,
    desc:"a classic",
    ingredients:[
        "bread",
        "beef",
        "dressing",
        "cheese"
    ]
}

// console.log(sandwich);