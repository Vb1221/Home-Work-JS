window.onload = () => {
  let loginInput = document.querySelector('.login')
  let passwordInput = document.querySelector('.password')
  let loginForm = document.querySelector('.loginForm')
  let orderForm = document.querySelector('.orderForm')
  let newPizzaBtn = document.querySelector('.newPizza')

  let adminData = {
    login: 'user',    
    password: 123456  
  }

  loginForm.onsubmit = () =>{
    if (loginInput.value == adminData.login && passwordInput.value == adminData.password){
      loginForm.style.display = 'none'
      orderForm.style.display = 'flex'
      newPizzaBtn.style.display = 'block'

    }
    else{
      alert('Try again')
    }
  }

  /////////////////////////////////////////////////////

  let body = document.querySelector('body')

  let variablesOfPizza = [
    {name: 'Мисливська',
    priceS: 120,
    priceM: 130,
    priceL: 140},
    {name: 'Тропічна',
    priceS: 110,
    priceM: 120,
    priceL: 130},
    {name: 'З морепродуктами',
    priceS: 150,
    priceM: 160,
    priceL: 170}
  ]

  let plusBtn = document.querySelector('.plus')
  let minusBtn = document.querySelector('.minus')

  let quantityEl = document.querySelector('.quantityOfPizza')
 
  let inputPizza = document.querySelector('.typeOfPizza')
  
  let orderBtn = document.querySelector('.createOrder')

  let priceSpan = document.querySelector('.priceOfPizza')

  let quantity = 1



  let clickSize

  let sizeDiv = document.querySelector('.sizePizza')
  let radioInput = document.querySelectorAll('.radio')


  sizeDiv.onclick = function(){
    for (let i = 0; i < radioInput.length; i++){
      if (radioInput[i].checked){
        clickSize = radioInput[i].value;
        // console.log(clickSize)
        sizeDiv.dispatchEvent(new Event('change'));
        break
      }
         
    }
  }
  
  // inputPizza.onchange = function(){
  //   for (let i = 0; i < variablesOfPizza.length; i++){
  //     if(this.value == variablesOfPizza[i].name){
  //       priceSpan.innerHTML = `${variablesOfPizza[i][clickSize]} грн`
  //     }
  //   }
  //   }
  function disabledBtn(){
    if (totalSum > 0){
      orderBtn.removeAttribute('disabled')
    }else if (totalSum == 0){orderBtn.setAttribute('disabled', 'disabled')}
  }
  
  function checkPrice(){
    for (let i = 0; i < variablesOfPizza.length; i++){
      if(inputPizza.value == variablesOfPizza[i].name){
        priceSpan.innerHTML = variablesOfPizza[i][clickSize] * quantity
      }
    }
    disabledBtn()
  }

  sizeDiv.addEventListener('change', function() {
    checkPrice()
  });

  let totalOrderDiv = document.querySelector('.totalOrder')
  let p = document.createElement('p')
  let totalSum = 0
  let totalSumP = document.createElement('p')

  newPizzaBtn.onclick = () =>{
    let pizzaSize 
    if (clickSize == 'priceS'){
      pizzaSize = 'Маленька'
    }else if (clickSize == "priceM"){
      pizzaSize = 'Середня'
    }else if (clickSize == "priceL"){
      pizzaSize = 'Велика'
    }

    totalSum = totalSum + Number(priceSpan.innerHTML)
    let p = document.createElement('p')
    let removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'Delete'
   
    totalSumP.innerHTML = `До сплати ${totalSum} грн`
    p.innerText = `${quantity} ${inputPizza.value}, ${pizzaSize} , ${Number(priceSpan.innerHTML)}`
    totalOrderDiv.appendChild(p)
    totalOrderDiv.appendChild(removeBtn)
    totalOrderDiv.appendChild(totalSumP)
    disabledBtn()
    inputPizza.value = ''
    let arrPrice = [priceSpan.innerHTML]
    priceSpan.innerHTML = 0
    quantityEl.innerText = 1

    removeBtn.onclick = function(){
      totalSum = totalSum - arrPrice
      totalSumP.innerHTML = `До сплати ${totalSum} грн`
      p.remove()
      removeBtn.remove()
      // console.log(arrPrice)
      disabledBtn()
    }

  }
  orderForm.addEventListener('submit', function(event){
    event.preventDefault()
    plusBtn.onclick = () => {
      quantity++ 
      quantityEl.innerText = quantity;
      checkPrice()
    }
    minusBtn.onclick = () =>{
      quantity-- 
      quantityEl.innerText = quantity;
      if (quantity < 0 ){
        quantity = 0
        quantityEl.innerText = quantity;
        priceSpan.innerHTML = variablesOfPizza[i][clickSize] * quantity
      }
      checkPrice()
    }
  })

  let finalForm = document.querySelector('.finalForm')

  orderBtn.onclick = function(){
    orderForm.style.display = 'none'
    newPizzaBtn.style.display = 'none'
    finalForm.style.display = 'flex'
  }

  let deliveryRadioInput = document.querySelector('.deliveryRadio')
  let adressInput = document.querySelector('.deliveryInput')
  let nonDelivery = document.querySelector('.notdeliveryRadio')

  adressInput.setAttribute('disabled', 'disabled')

  deliveryRadioInput.addEventListener('click', function() {
    if (this.checked) {
      adressInput.removeAttribute('disabled')
    }
  });
  nonDelivery.onclick = () => {
    adressInput.setAttribute('disabled', 'disabled')
  }
  
  
  }


