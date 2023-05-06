window.onload = () =>{
 
  document.querySelector('.widthBtn').onclick = function(){
    let width = window.innerWidth
    let height = window.innerHeight
    window.localStorage.setItem("width", width)
    window.localStorage.setItem("height", height)
  } 

  document.querySelector('.removeLocalData').onclick = function(){
    window.localStorage.removeItem("width")
    window.localStorage.removeItem("height")
  }

  function divideByZero(a, b) {
    if (b === 0) {
      throw new SyntaxError('Ділення на нуль неможливе');
    }
    return a / b;
  }
  
  try {
    console.log(divideByZero(10, 0));
  } catch (error) {
    console.error(error.message);
    alert('Помилка Оброблена')
  }
  


  let okBtn = document.querySelector('.drawCircle')
  let svgContainer = document.querySelector('.svgContainer')

  okBtn.onclick = () => {
    let circleR = document.querySelector('.circleR').value
    let svg = document.createElementNS("http://www.w3.org/2000/svg","svg")
    svg.setAttribute('width', '800')
    svg.setAttribute('height', '800')
  
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", '400'); 
      circle.setAttribute("cy", '400'); 
      circle.setAttribute("r", circleR); 
      circle.setAttribute("fill", "red"); 
  
      svg.appendChild(circle)
      svgContainer.appendChild(svg)
  }

let taskBtn = document.querySelector('.addTasks');
let taskListDiv = document.querySelector('.taskList');
let completeDiv = document.querySelector('.complete');

let taskListArr = [];

if (localStorage.getItem('task') != undefined) {
  taskListArr = JSON.parse(localStorage.getItem('task'));
  outputInfo();
}

taskBtn.onclick = function() {
  let taskInput = document.querySelector('.tasks');
  let taskInputValue = taskInput.value;
  let allTasks = {};
  allTasks.task = taskInputValue;
  allTasks.check = false;
  let i = taskListArr.length;
  taskListArr[i] = allTasks;
  taskInput.value = '';
  outputInfo();
  localStorage.setItem('task', JSON.stringify(taskListArr));
};

function outputInfo() {
  taskListDiv.innerHTML = '';
  completeDiv.innerHTML = '';

  for (let key in taskListArr) {
    let div = document.createElement('div');
    div.style.display = 'flex';
    let checkInput = document.createElement('input');
    let p = document.createElement('p');
    checkInput.setAttribute('type', 'checkbox');
    checkInput.className = 'checkTask';
    p.innerHTML = taskListArr[key].task;

    checkInput.addEventListener('change', function() {
      if (this.checked) {
        p.classList.add('strike-through-text');
        completeDiv.appendChild(div);
        taskListArr[key].check = true;
      } else {
        p.classList.remove('strike-through-text');
        taskListDiv.appendChild(div);
        taskListArr[key].check = false;
      }

      localStorage.setItem('task', JSON.stringify(taskListArr));
    });

    div.appendChild(checkInput);
    div.appendChild(p);

    if (taskListArr[key].check) {
      p.classList.add('strike-through-text');
      completeDiv.appendChild(div);
      checkInput.checked = true;
    } else {
      taskListDiv.appendChild(div);
    }
  }
}

}