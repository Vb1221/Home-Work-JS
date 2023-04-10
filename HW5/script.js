function firstTask(){
  let figures = [
    {
      figure:'Square',
      sizeA: 4,
      sizeB: 4
    },
    {
      figure:'Rectangle',
      sizeA:4,
      sizeB:8
    }
  ];

  for (let property of figures){
    let area =  property.sizeA * property.sizeB;
 
    console.log(area);
  }
}


// ['Keep' 'Remove' 'Keep' 'Remove' 'Keep' 'Keep' 'Remove' 'Remove']

function secondTask(){
  let Keep = document.getElementById('arrKeep').value;
  let space = ' ';

  let arrayKeep =  Keep.split(space);

  function keepFilter (element){
    return element == 'Keep';
  }

  let arrayKeepFiltered = arrayKeep.filter(keepFilter);

  console.log(arrayKeepFiltered);
};

/// age name bread color

  function CatConstructor(name, bread, color, age){
    this.name = name;
    this.bread = bread;
    this.color = color;
    this.age = age;

  }

function thirdTask(){

  let rusty  = new CatConstructor('Вогник', 'Персидська', 'Руда', 6);
  let skin = new CatConstructor('Колді', 'Сфінкс', 'Сірий', 4);
  let hellBoy = new CatConstructor('Рон', 'Мейн-Кун', 'Чорний', 5);

    console.log(rusty)
    console.log(skin)
    console.log(hellBoy)


}

function taskFour(){
  let rusty  = new CatConstructor('Вогник', 'Персидська', 'Руда', 6);
  let skin = new CatConstructor('Колді', 'Сфінкс', 'Сірий', 4);
  let hellBoy = new CatConstructor('Рон', 'Мейн-Кун', 'Чорний', 5);

    let catArr = []
    catArr.push(rusty, skin, hellBoy)
    console.log(catArr.sort(function(a, b){return a.age - b.age}))
}

function taskFive(){
  let userMoney = document.getElementById('money').value

  let bank = [
    {
      currency: 'usa',
      prise: 38
    },
    {
      currency: 'eur',
      prise: 39
    },
    {
      currency: 'zlt',
      prise: 10
    }
  ]

  let moneyExchange = []

  for (let exchange of bank){
    let result = userMoney/exchange.prise
    moneyExchange.push(`За ${userMoney} грн ви можете отримати ${result} ${exchange.currency}`)

  }
  console.log(moneyExchange)
}


let rockBtn = document.getElementById('rock');
let scissorsBtn = document.getElementById('scissors');
let paperBtn = document.getElementById('paper');

rockBtn.addEventListener('click', () => game(0));
scissorsBtn.addEventListener('click', () => game(1));
paperBtn.addEventListener('click', () => game(2));

function randomChoice() {    
    let variables = ["камінь", "ножиці", "папір"];
    let randomIndex = Math.floor(Math.random() * variables.length);
    return randomIndex;
}

function game(playerSelection) {
    let randomSelection = randomChoice();
    let variables = ["камінь", "ножиці", "папір"];
    let winner;

    if (playerSelection === randomSelection) {
        winner = "Нічия!";
    } else if ((playerSelection === 0 && randomSelection === 1) || 
                (playerSelection === 1 && randomSelection === 2) || 
                (playerSelection === 2 && randomSelection === 0)) {
        winner = "Ви перемогли!";
    } else {
        winner = "Ви програли!";
    }

    console.log(`Ви вибрали ${variables[playerSelection]}, комп'ютер вибрав ${variables[randomSelection]}. ${winner}`)
}
