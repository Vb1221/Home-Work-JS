window.onload = ()=>{

  let menuItems = ['index1','index2','index3','index4','index5','index6','index7','index8','index9','index10'];

  for (let i = 0; i < menuItems.length; i++) {
    let link = document.createElement('a');
    link.href = `${menuItems[i]}.html`;
    link.className = 'menu-item'
    if(i == 2){
      link.classList.add('active')
    }
    link.textContent = menuItems[i];
    document.body.appendChild(link); 
    link.style.display = 'inline-block'
    link.style.padding = '20px'
    link.style.color = 'red'
  }

  let [...inputs] = document.querySelectorAll('input')
  
  inputs.forEach(input =>{
    input.removeAttribute('disabled')
    input.style.backgroundColor = 'green'
    input.style.color = 'white'
  })
   

}


