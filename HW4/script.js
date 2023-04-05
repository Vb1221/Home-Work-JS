function firstTask(){
  
  let ar = document.getElementById('numberArray').value

  let space = ' '
  

  let arr1 = ar.split(space)
  let arrayInt = arr1.map(str => Number(str))
  let arr2 = []
  
  for(let i = 0; i <= arrayInt.length; i++) {
    if(arr1[i] % 2 == 0) {
        arr2.push(arrayInt[i]);
    }
}

  console.log(arr2)
}

/////////////////////////

function secondTask(){

  let shopList = []
  for (let i = 0; i < 3; i++){
    let shop = prompt('What add to list?')
    shopList.push(shop)
  }
  console.log(shopList)
}



////////////////////


function thirdTask(...arrayInt){
  let ar = document.getElementById('numberArray2').value

  let space = ' '

  let arraySplit =  ar.split(space)

   arrayInt = arraySplit.map(str => Number(str))

  let arraySum = 0

  for(let i = 0; i < arrayInt.length; i++) {
    arraySum += arrayInt[i]
}

  console.log(arraySum)

}

////////////

function congrat(dateBirthday){
  let age = 2023 - dateBirthday
  return age
  
}


function taskFour(){
  let dateBirthday = document.getElementById('dateBth').value

  let age1 = congrat(dateBirthday)

  console.log(`Your age is ${age1}`)

}


////////////

function taskFive(){
  let dateBirthday = document.getElementById('arrBth').value

  let space = ' '

  let arraySplit =  dateBirthday.split(space)

  let arrayAge = []  

  for(let i = 0; i < arraySplit.length; i++){
   let ages = congrat(arraySplit[i])
   arrayAge.push(ages)
  }

  console.log(arrayAge)
}


//////////


function taskSix(){
  let productDetail = {}
  productDetail['Name'] = prompt("Enter name Product", 'Apple')
  productDetail['Price'] = +prompt("Enter price Product", '25')
  productDetail['Color'] = prompt("Enter color Product", 'Red')
  productDetail['Discount'] = confirm('Any discount?')
  console.log(productDetail)
}


////////////////

function taskSeven(){
  let cordinat = {}
  cordinat.left = Math.random() * 1000
  cordinat.top = Math.random() * 100
 
  console.log(cordinat)

}
