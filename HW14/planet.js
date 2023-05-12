window.onload = () =>{

  let allPlanets = [];
  let body = document.querySelector('body');
  body.style.backgroundColor = '#000000'
  let sizeBtn = document.querySelector('.sizeFilter');
  let sizeBtn1 = document.querySelector('.sizeFilter1');
  let populationBtn = document.querySelector('.populationFilter')
  let populationBtn1 = document.querySelector('.populationFilter1')

  
  let url = 'https://swapi.dev/api/planets/';
  
  // function fetchAllData(url) {
  //   let planetsContainer = document.createElement('div');
  //   planetsContainer.className = 'container';
  
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       allPlanets.push(...data.results);
  
  //       if (data.next) {
  //         fetchAllData(data.next);
  //       } else {
  //         displayPlanets(allPlanets);
  //       }
  //     })
  //     .catch(error => {
  //       console.log('Виникла помилка:', error);
  //     });
  // }

  function fetchAllData(url) {
    let planetsContainer = document.createElement('div');
    planetsContainer.className = 'container';
  
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
  
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        let data = JSON.parse(xhr.responseText);
        allPlanets.push(...data.results);
  
        if (data.next) {
          fetchAllData(data.next);
        } else {
          displayPlanets(allPlanets);
        }
      } else {
        console.log('Помилка при отриманні даних');
      }
    };
  
    xhr.onerror = function () {
      console.log('Виникла помилка при виконанні запиту');
    };
  
    xhr.send();
  }
  
  function displayPlanets(planets) {
    let planetsContainer = document.createElement('div');
    planetsContainer.className = 'container';
  
    for (let x = 0; x < planets.length; x++) {
      let planet = planets[x];
      let planetCard = createPlanetCard(planet);
      planetsContainer.appendChild(planetCard);
    }
  
    body.appendChild(planetsContainer);
  

    sizeBtn.onclick = () => { 
      planetsContainer.remove();
      allPlanets.sort((a, b) => {
        if (a.diameter === 'unknown') {
          a.diameter = 0;
        }
        return b.diameter - a.diameter;
      });
      displayPlanets(allPlanets);
    }
    sizeBtn1.onclick = () => {
      planetsContainer.remove();
      allPlanets.sort((a, b) => {
        if (a.diameter === 'unknown') {
          a.diameter = 0;
        }
        return a.diameter - b.diameter;
      });
      displayPlanets(allPlanets);
    }
    populationBtn1.onclick = () => {
      planetsContainer.remove();
      allPlanets.sort((a, b) => {
        if (a.population === 'unknown') {
          a.population = 0;
        }
        return b.population - a.population;
      });
      displayPlanets(allPlanets);
    }
    populationBtn.onclick = () => {
      planetsContainer.remove();
      allPlanets.sort((a, b) => {
        if (a.population === 'unknown') {
          a.population = 0;
        }
        return a.population - b.population;
      });
      displayPlanets(allPlanets);
    }
  }

  function createPlanetCard(planet) {
    let planetCard = document.createElement('div');
    planetCard.className = 'planetCard';
  
    let planetName = document.createElement('h1');
    planetName.innerHTML = planet.name;
    planetCard.appendChild(planetName);
  
    let planetSize = document.createElement('p');
    planetSize.innerHTML = `Diameter: ${planet.diameter}`;
    planetCard.appendChild(planetSize);
  
    let planetPopulation = document.createElement('p');
    planetPopulation.innerHTML = `Population: ${planet.population}`;
    planetCard.appendChild(planetPopulation);
  
    let planetClimate = document.createElement('p');
    planetClimate.innerHTML = `Climate: ${planet.climate}`;
    planetCard.appendChild(planetClimate);
  
    return planetCard;
  }
  
  fetchAllData(url);
  

}