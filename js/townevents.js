const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towndata = jsonObject['towns'];
    for (let i = 0; i < towndata.length; i++ ) {
    	let card = document.createElement('section');
		  let h2 = document.createElement('h3');
      let motto = document.createElement('p');
      let yearFounded= document.createElement('p');
      let image = document.createElement('img');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');

		  h2.textContent = towndata[i].name;
      motto.textContent = towndata[i].motto;
      yearFounded.textContent = 'Year Founded: ' + towndata[i].yearFounded;
      population.textContent = 'Population: ' + towndata[i].currentPopulation;
      rainfall.textContent = 'Annual Rainfall: ' + towndata[i].averageRainfall;
      image.setAttribute('src', "images/" + towndata[i].photo);
      image.setAttribute('alt', towndata[i].name + ' picture');

  		card.appendChild(h2);
      card.appendChild(motto);
      card.appendChild(yearFounded);
      card.appendChild(rainfall);
      card.appendChild(image);

      if (h2.textContent == "Preston" || h2.textContent == "Fish Haven" || h2.textContent == "Soda Springs") {
		      document.querySelector('div.cards').appendChild(card);
        }
    	}
  });