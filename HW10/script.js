window.onload = ()=> {
  let block = document.querySelector('.block');
    block.style.backgroundColor = 'purple';
    block.style.width = '20px';
    block.style.height = '20px';
    block.style.position = 'relative';
    block.style.top = 0;
    block.style.left = 0;

    let x = 0;
    let y = 0;
    let step = 5;


  let area = document.querySelector('.borderArea');
    area.style.border = 'solid 2px blue';
    area.style.width = '380px';
    area.style.height = '380px';
    area.style.margin = '0 auto';

  let body = document.querySelector('body');

  body.addEventListener('keydown', moveTo);

  function moveTo(e){
    // console.log(e)
    if (e.key === 'ArrowRight' && x < 360){
      x = x + step;
        block.style.left = x + 'px';
    }
    else if (e.key === 'ArrowLeft' && x > 0 ){
      x = x - step;
        block.style.left = x + 'px';
    }
    else if (e.key === 'ArrowUp' && y > 0){
      y = y - step
        block.style.top = y + 'px'
    }
    else if (e.key === 'ArrowDown' && y < 360){
      y = y + step;
        block.style.top = y + 'px';
    }
  }

  let images = ['1.jpg', '2.jpg', '3.jpg', '4.webp', '5.jpg', '6.jpg'];

  let image = document.querySelector('.image');
  let div = document.querySelector('.slider');
  image.style.width = '450px';
  image.style.height = '450px';
  div.style.textAlign = 'center';
  div.style.margin = '30px';
  let nextBtn = document.querySelector('.next')
  let prevBtn = document.querySelector('.prev')

  let i = 0

  let position;

  let imgChange =() => {
        image.setAttribute('src', `img/${images[i]}`);
        i++ ;
        if (i > 5){
          i = 0;
        }
        return position
  }
  position = setInterval(imgChange, 3000);


  function stopChange(){
    clearInterval(position);
  }

  function nextImg(){
    stopChange()
    i++
    if (i > 5){
      i = 0;
    }
    image.setAttribute('src', `img/${images[i]}`);
  }

  function prevImg(){
    stopChange()
    i--
    if (i < 0){
      i = 5;
    }
    image.setAttribute('src', `img/${images[i]}`);
  }

  image.addEventListener('mouseover', stopChange);
  image.addEventListener('mouseout', ()=> {
    position = setInterval(imgChange, 3000);
  });
  nextBtn.addEventListener('click', nextImg)
  prevBtn.addEventListener('click', prevImg)

  

}