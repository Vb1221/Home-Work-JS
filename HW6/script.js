
  function UserConstructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  
  UserConstructor.prototype.returnUserInfo = function(){
    return `${this.name}, ${this.surname}, ${this.age} year old`
  }

  UserConstructor.prototype.info = function(){
    console.log(`${this.name}, ${this.surname}, ${this.age} year old`)
  }

  let user1 = new UserConstructor('John', 'Simons', 25)
  let user2 = new UserConstructor('Jack', 'Raigan', 30)
  let user3 = new UserConstructor('Leo', 'Linch', 18)


function taskOne(){

  console.log(user1.returnUserInfo())
  user2.info()
  
}

UserConstructor.prototype.updateUser = function(newName, newSurname, newAge){
  this.name = newName;
  this.surname = newSurname;
  this.age = newAge;
}

function taskTwo(){

  user1.updateUser('Rick', 'Smith', 40);
  user2.updateUser('Morti', 'Gray', 21);

  console.log(user1.returnUserInfo())
  user2.info()
}

function taskThree(){
  let userArr = []
  userArr.push(user1, user2, user3)

  // console.log(userArr.sort(function(a, b){return a.age - b.age}))
  
function sortByAge(user1, user2){
  return user1.age - user2.age
}
userArr.sort(sortByAge)
console.log(userArr)
}

function taskFour(){
  let name = prompt('Enter Name');
  if(name.length>0){
    console.log(name.slice(0,1), name.slice(name.length - 1, name.length));

  }
}

function taskFive(){
  let str = '  qwerty keyboard  '
  let trimStr = str.trim()
  if (trimStr.length > 10){
    let sliceTrimStr = trimStr.slice(0,10)
    let PointTrimStr = sliceTrimStr +'...'
    console.log(PointTrimStr)
  }
}

function taskSix(){
  function yearMath(year){
    let century = Math.ceil(year/100)
    return century
  }

  let years = [1810, 1700, 1601, 2000, 1505, 1190]

  for (let i = 0; i < years.length; i++){
    let mathCentuary = yearMath(years[i])
    console.log(` ${years[i]} це ${mathCentuary} століття`)
  }
}

function taskSeven(){
  let daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
  let monthsOfYear = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Червня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"];
  
  let date = new Date();
  let dayOfWeek = daysOfWeek[date.getDay()-1];
  let dayOfMonth = date.getDate();
  let monthOfYear = monthsOfYear[date.getMonth()];
  let year = date.getFullYear();
  
  console.log(`Сьогодні: ${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year} року`);
  
}


