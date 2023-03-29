function firstTask(){

let firstNumber = Number(prompt('Введіть перше значення'));

let secondNumber = Number(prompt('Введіть друге значення'));

let ret = prompt('Введіть + - * /');

if (ret === '+') {
  console.log(firstNumber + secondNumber);
}

else if (ret === '-'){
  console.log(firstNumber - secondNumber);
}

else if( ret === '*'){
  console.log(firstNumber * secondNumber);
}

else if (ret === '/' && secondNumber === 0){
  alert("Error Value")
}

else if(ret === '/'){
  console.log(firstNumber / secondNumber);
}
}

function secondTask() {

  let i = 1;

  while(i <= 20){
    if (i % 2 == 0){
      console.log(i)
    }
    i++
  }
}

function thirdTask(){
  let login = prompt('Enter Login')
  let password = prompt('Enter Password')

  if (login == 'admin' && password == '12345'){
    alert('Вітаємо в системі');
  }
  else {
    alert("Password Login не вірні");
  }
}

function fourthTask(){
  let age = Number(prompt('Скільки вам років?'));

  let result = age >= 18 ? console.log (true) : console.log(false);
}


function fifthTask(){
  let price = Number(prompt('Введіть ціну для розрахунку знижки'));
  if (price >= 100 && price < 3000){
    console.log(price * 0.97);
  }
  else if (price >= 3000 && price < 10000){
    console.log(price * 0.95);
  }
  else if (price >= 10000){
    console.log(price * 0.93);
  }

  else if (price < 0){
    console.log('Введена некоректна ціна, перевірте ще раз');
  }

  else {
    console.log(`У вас немає знижки, до сплати ${price} грн`);
  }
}

function clearCon() {
  console.clear();
}

