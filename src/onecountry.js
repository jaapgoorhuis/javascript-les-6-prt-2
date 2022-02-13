import axios from "axios";

const searchField = document.getElementById('searchbutton');
searchField.addEventListener('click', getOnecountry);

async function getOnecountry() {
    try {
        const valueField = document.getElementById('searchfield').value;
        const oneCountry = await axios('https://restcountries.com/v2/name/'+valueField);
        searchCountry(oneCountry);
    }
    catch (e) {
        console.log(e);
        alert('land niet gevonden');
        document.getElementById('resultbox').style.display = 'none';
    }
}

function searchCountry(country) {
    document.getElementById('resultbox').style.display = 'block';
    const oneCountry = country.data[0];
    console.log(oneCountry)
    const htmlElement = document.getElementById('resultbox');
    console.log(oneCountry.currencies);
    let currencies = Array();
    oneCountry.currencies.map((currency) => {
        currencies.push(currency.name);
    });
    const currencyResult = currencies.join(' and ')
    htmlElement.innerHTML= `
                    <article>
                        <section id="title">
                            <img id="onecountryimage" src="${oneCountry.flag}"/>
                            <label id="onetitle">${oneCountry.name}</label>
                        </section>
                        <section id="description">
                            ${oneCountry.name} is situated in ${oneCountry.subregion}.<br> 
                            It has a population of ${oneCountry.population} people.<br>
                            The capital is ${oneCountry.capital} and you can pay with ${currencyResult}. <br>
                            They speak dutch.
                            
                        </section>
                    </article>                    
`
    document.getElementById('searchfield').value = '';
}
