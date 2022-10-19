var displayPeople = ["jack", "leo", "matt", "fdfd"];



const showPeopleNumber = () => {
    var updateNumber = [];
    var text = " "
    for(let i = 0; i < displayPeople.length; i++){
      updateNumber.push(displayPeople[i]);
    }
    document.getElementsByClassName('app-list').innerHTML = text + updateNumber.length;
  }
  showPeopleNumber();


