window.onload = ()=>{
  let divLengthBtn = document.querySelector('.divLengthBtn')
  let clearBtn = document.querySelector('.clearBtn')

  function createDiv(){
  let strInput = document.querySelector('.divLength').value
    for (let i = 1; i <= strInput; i++){
      let div1 = document.createElement('div')
      div1.innerHTML = i
      div1.className = 'createDivs'
      document.body.appendChild(div1)
    }
  }
function clearCheck(){
  let arrDiv = document.querySelectorAll('.createDivs')
  function clearAll(){
    arrDiv.forEach(element => element.remove());   
  }
  function removeBtn(){
    clearBtn.remove()
  }
  let clearBtn = document.createElement('button')
  if (arrDiv.length > 5){   
    clearBtn.innerHTML = 'Clear All'
    clearBtn.className = 'clearBtn'
    document.body.appendChild(clearBtn)
    clearBtn.addEventListener('click', clearAll)
    clearBtn.addEventListener('click', removeBtn)
  } 
}
  divLengthBtn.addEventListener('click', createDiv)
  divLengthBtn.addEventListener('click', clearCheck)
  
  /////////////////////////



  let products = [];

  class ProductClass {
      constructor(nameProduct, price) {
          this.nameProduct = nameProduct;
          this.price = price;
      }

  }

  let button = document.querySelector('.submitBtn');
  let nameItem = document.querySelector('.nameP')
  let priceItem = document.querySelector('.priceP')


  let divOutput = document.querySelector('.output')
  let btnShowAll = document.createElement('button')
  btnShowAll.innerHTML = 'Show All'
  

  function addItem(){
    let items = new ProductClass(nameItem.value, priceItem.value)
    products.push(items)
    console.log(products)
    if(products.length > 3){
      divOutput.appendChild(btnShowAll)
      btnShowAll.addEventListener('dblclick', showAll)
    }
  }

  function showAll(){
    for (let item of products){
      let itemValue = document.createElement('p')
      itemValue.innerHTML = `${item.nameProduct} ${item.price}`
      divOutput.appendChild(itemValue)
    }
  }
  button.addEventListener('click', addItem)


////////

 let addProductBtn = document.querySelector('.addProduct')

 let nameProductInput = document.querySelector('.nameProduct')

 let mainDiv = document.querySelector('.showProduct')

 function addProductInfo(){
  let timeCreating = new Date()

  let currentHours = timeCreating.getHours()
  let currentMinutes = timeCreating.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let currentYear = timeCreating.getFullYear()
  let inputValue = document.createElement('div')
  inputValue.style.margin = '10px'
  inputValue.innerHTML = `${nameProductInput.value}, ${currentHours}:${currentMinutes} ${currentYear}`
  mainDiv.appendChild(inputValue)
  let buyBtn = document.createElement('button')
  buyBtn.innerHTML = 'Buy'
  mainDiv.appendChild(buyBtn)
  nameProductInput.value = ' '
  function buyCheck(){
    inputValue.style.backgroundColor = 'gray'
  }
  buyBtn.addEventListener('click', buyCheck)
 }

 addProductBtn.addEventListener('click', addProductInfo)

}


