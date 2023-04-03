function firstTask(){
  let a = Number(prompt('Enter A'));
  let b = Number(prompt('Enter B'));

  for(i = a; i < b; i++){
    let result = i + b;
    
    console.log(result);
  }
}

function secondTask(){
  for(let i = 20; i > 0; i--){
    console.log(i)
  }
}

function thirdTask(){
  let num = +prompt("Введіть розмір трикутника");
  let star = '*';
  let stars = ' ';
  for(let i = 1; i < num; i++){
    
    stars += star;
    console.log(stars);
  }
}

function fourthTask(){
let height = +prompt('Height')
let width = +prompt('width')
let star = '*'
// let text = ' ' 

  for (let i = 0; i < height; i++ ){
    let text = ' '
    for (let w = 0; w < width; w++){

     text += star
      
    }
   
    console.log(text)
  }
}

function fiveTask(){
  let day = prompt('What day?');

  switch (day){
    case 'Вівторок':
      case 'вівторок':
      console.log('У вас сьогодні заняття')
      break;
    case 'Четвер':
      case 'четвер':
      console.log('У вас сьогодні заняття')
      break;
    default:
      console.log('У вас сьогодні вільний день')
  }
}

function sixTask(){
  let name = prompt('Вкажіть планету')
  switch (name){
    case  'Меркурій': 
    case  'меркурій':
    case  "Венера": 
    case  "венера":
    case  "Земля":
    case  "земля":
    case  "Марс":
    case  "марс":
    case "Юпітер":
    case "юпітер": 
    case "Сатурн":
    case  "сатурн":
    case "Уран":
    case "уран":
    case "Нептун":
    case "нептун": 
      console.log('Планета знаходиться в сонячній системі')
      break;
    default:
      console.log('Планета знаходиться поза межами нашої сонячної системи')
  }

}




function sevenTask(){
  let smile = [':)', '=)', ':)', '=)', ':)', '=)'];

for (let i = 0; i < smile.length; i++){
    if (smile[i] === '=)'){
        smile[i]=';)'
    }
}

console.log(smile)
}