window.onload = () => {
  let allUsers = document.querySelector('.usersContainer')
  fetch('users.json')
    .then(response => response.json())
    .then(data => {
      let usersInfo = data

      for (let i = 0; i < usersInfo.length;i++){
        let cardDiv = document.createElement('div')
        cardDiv.className = 'card'
        let foolName = document.createElement('h1')
        let userName = document.createElement('h2')
        let phone = document.createElement('h3')
        let companyInfo = document.createElement('h4')
        let userAddress = document.createElement('p')
        let userEmail = document.createElement('a')
        let userWebsite = document.createElement('a')
        userEmail.href = '#'
        userWebsite.href = '#'

        foolName.innerHTML = usersInfo[i].name
        userName.innerHTML = usersInfo[i].username
        phone.innerHTML = usersInfo[i].phone
        companyInfo.innerHTML = usersInfo[i].company.name
        companyInfo.innerHTML = usersInfo[i].company.catchPhrase
        userAddress.innerHTML = usersInfo[i].address.city
        userEmail.innerHTML = usersInfo[i].email
        userWebsite.innerHTML = usersInfo[i].website

        cardDiv.appendChild(foolName)
        cardDiv.appendChild(userName)
        cardDiv.appendChild(userEmail)
        cardDiv.appendChild(phone)
        cardDiv.appendChild(companyInfo)
        cardDiv.appendChild(userAddress)
        cardDiv.appendChild(userAddress)
        cardDiv.appendChild(userWebsite)

        allUsers.appendChild(cardDiv)
      }
    })
      .catch(error => {
    console.log('Виникла помилка:', error)
  })
 



}