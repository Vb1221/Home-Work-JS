window.onload = () => {
  let strInput = document.querySelector('.inputUpperLetter')
 
  function countUppercaseLetters(string) {
    let regex = /[A-Z]/g; 
    let  matches = string.match(regex); 
    return matches ? matches.length : 0; 
  }
  
  strInput.onclick = () => {
    let string = strInput.value
    let count = countUppercaseLetters(string); 
    console.log(count); 
  }
  


  let numInput = document.querySelector('.returnNumber')

  function returnNum(result){
    let patternNum = /\D/g 
    let replaceL = result.replace(patternNum, '')
    return replaceL
  }

  numInput.onclick = () =>{
    let result = numInput.value 
    let numResult = returnNum(result)
    console.log(numResult)

  }

}