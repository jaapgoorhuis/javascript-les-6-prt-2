import axios from 'axios';

async function getCountries () {
    try {
        const allCountries = await axios('https://restcountries.com/v2/all');

        allCountries.data.sort((a,b) => {
            return a.population - b.population
        })

        createCountries(allCountries.data);
    }
    catch(e) {
        console.error(e);
    }
}

getCountries();

function createCountries(countries) {

    console.log(countries);
    const htmlElement = document.getElementById('allcountries');

    countries.map((result) => {
        const list = document.createElement('li')
           list.innerHTML= `
                    <img id="countryimage" src="${result.flag}"/>
                    <label id="title" class="${result.region}">${result.name}</label>
                    <section id="description">Has a population of ${result.population} people</section>
                    `
       htmlElement.appendChild(list);
    });
}
