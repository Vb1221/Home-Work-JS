window.onload = ()=>{
let headerTag = document.getElementsByTagName('header');
let footerTag = document.getElementsByTagName('footer')
let navTag = document.getElementsByTagName('nav')
let ulTag = document.getElementsByTagName('ul')
let [...liTag] = document.getElementsByTagName('li')

console.log(headerTag)
console.log(footerTag)
console.log(navTag)
console.log(ulTag)
console.log(liTag)

function ShopCard(item, price){
  this.item = item
  this.price = price
}
let tv = new ShopCard('tv', 100)
let phone = new ShopCard('phone', 150)
let laptop = new ShopCard('laptop', 300)

let shopList = [tv, phone, laptop]

let mainDiv = document.createElement('div');
mainDiv.className = 'product-list'


for (let i = 0; i < shopList.length; i++){
  let secondaryDiv = document.createElement('div');
  secondaryDiv.className = 'card';
  mainDiv.appendChild(secondaryDiv);
  secondaryDiv.innerHTML = `${shopList[i].item}, коштує ${shopList[i].price}`
}
document.body.appendChild(mainDiv);



}

