// function print(firstName) {
//   console.log(`Hello ${firstName}`);
// }



// function createEmail(firstName, price ){
//     let shopping = 5.95;
//     console.log(`hi ${firstName}! thanks, total price ${price}`)
// }

// createEmail("David", 127);


//const displayPeople = [];


const printPeople = () => {
  let peopleList = ["jACK", "SID", "Paul", "Manuel"];
  let idArray = []; 
  let li = "<li>";
  let liEnd = "</li>";
  for           (let i = 0; i < peopleList.length; i++){
    idArray.push(li + peopleList[i].toUpperCase() + liEnd)
  }
  document.getElementsByClassName("app-list")[0].innerHTML = idArray.join(' ');
  console.log(peopleList);
}


printPeople();















