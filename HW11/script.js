window.onload = () => {
  let loginInput = document.querySelector('.login')
  let passwordInput = document.querySelector('.password')
  let loginForm = document.querySelector('.loginForm')
  let orderForm = document.querySelector('.orderForm')
  let subBtn = document.querySelector('.submit')
  

  let adminData = {
    login: '1',     // user
    password: 1  // 123456
  }

  loginForm.onsubmit = () =>{
    if (loginInput.value == adminData.login && passwordInput.value == adminData.password){
      loginForm.style.display = 'none'
      orderForm.style.display = 'block'
    }
    else{
      alert('Try again')
    }
  }

  let variablesOfPizza = [
    {name: 'Мисливська',
    price: 120},
    {name: 'Куряча',
    price: 110},
    {name: 'Морська',
    price: 150},
    {name: 'Кастомна',
    price: 80}
  ]

  let customsIng = [
    {name: 'Помідори',
      price: 15},
    {name: 'Ковбаски',
      price: 20},
    {name: 'Ананаси',
      price: 30},
    {name: 'Курятина',
      price: 25}
  ]

  let plusBtn = document.querySelector('.plus')
  let quantityEl = document.querySelector('.quantityOfPizza')
  let minusBtn = document.querySelector('.minus')
  let plusBtn1 = document.querySelector('.plus1')
  let quantityEl1 = document.querySelector('.quantityOfPizza1')
  let minusBtn1 = document.querySelector('.minus1')
  let quantity = 1
  let quantity1 = 1

  plusBtn.onclick = () => {
    quantity++ 
    quantityEl.innerText = quantity;
  }
  minusBtn.onclick = () =>{
    quantity-- 
    quantityEl.innerText = quantity;
    if (quantity < 0 ){
      quantity = 0
      quantityEl.innerText = quantity;
    }
  }


  plusBtn1.onclick = () => {
    quantity1++ 
    quantityEl1.innerText = quantity1;
  }
  minusBtn1.onclick = () =>{
    quantity1-- 
    quantityEl1.innerText = quantity1;
    if (quantity1 < 0 ){
      quantity1 = 0
      quantityEl1.innerText = quantity1;
    }
  }

/////////////////////////////////////////////

  let inputPizza = document.querySelector('.typeOfPizza')
  let inputPizza1 = document.querySelector('.typeOfPizza1')
  let pizzaDiv = document.querySelector('.pizza')


  let priceDiv = document.querySelector('.price')  // orderForm
  let price1 = 0
  let price2 = 0
  let sumPrice = 0

  function chosePizza(){
    for(let element of variablesOfPizza){
      if(inputPizza.value === element.name){
        price1 = element.price
      }
    }
    price1 = price1 * quantity
    return price1
  }

  function chosePizza1(){
    for(let element of variablesOfPizza){
      if(inputPizza1.value === element.name){
        price2 = element.price
      }
    }
      price2 = price2 * quantity1
      return price2
      
  }
  function returnSumPrice(){
    chosePizza()
    chosePizza1()
    sumPrice = price1 + price2
    priceDiv.innerHTML = `Замовлення ${inputPizza.value} та ${inputPizza1.value} буде коштувати ${sumPrice}`
  }

  function customPizza(){
    let customInput = document.createElement('input')
    customInput.setAttribute('list', 'customList')
    let customDataList = document.createElement('datalist')
    customDataList.id ='customList'
    customsIng.forEach((ing) =>{
      let ingOptions = document.createElement('option')
      ingOptions.value = ing.name
      customDataList.appendChild(ingOptions)
    })
    customInput.appendChild(customDataList)
    pizzaDiv.appendChild(customInput)
  }

  orderForm.appendChild(priceDiv)
  inputPizza.addEventListener('change', returnSumPrice)
  inputPizza1.addEventListener('change', returnSumPrice) //mouseover
  plusBtn1.addEventListener('click', returnSumPrice)
  plusBtn.addEventListener('click', returnSumPrice)
  minusBtn1.addEventListener('click', returnSumPrice)
  minusBtn.addEventListener('click', returnSumPrice)



}