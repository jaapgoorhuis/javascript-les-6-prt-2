import axios from 'axios';

async function getCountries () {
    try {
        const allCountries = await axios('https://restcountries.com/v2/all');
        const results = allCountries.data;
        results.sort((a, b) => {
            return a.population - b.population;
        });

        const htmlElement = document.getElementById('allcountries');
        const result = results.map((result) => {
            return `<div id="data" ">
                <img id="countryimage" src="${result.flag}"/>
                <label id="title" class="${result.region}">${result.name}</label>
                <section id="description">Has a population of ${result.population} people</section>
            </div>
                `
        });
        htmlElement.innerHTML = result.join('');
        return results;
    }
    catch(e) {
        console.error(e);
    }
}

getCountries();