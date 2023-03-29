import { getRefs } from './getRefs';
const refs = getRefs();

function createCountryList(arrayCountries) {
  refs.countryList.innerHTML = arrayCountries
    .map(country => {
      return `
    <li class = "country-list-item">
  <img
    class="country-img"
    src="${country.flags.svg}"
    alt="country-img"
    width="30"
    height="20"
  />
  <h2 class="country-name">${country.name.common}</h2>
</li>`;
    })
    .join('');
}

function createCountryInfo(arrayCountries) {
  firstCountry = arrayCountries[0];
  return `
  <div class="country-info-box">
  <img
    class="country-img"
    src="${firstCountry.flags.svg}"
    alt="country-img"
    width="30"
    height="20"
  />
  <h2 class="country-name">${firstCountry.name.common}</h2>
</div>
  <p class="info-list-item">Capital: ${firstCountry.capital}</p>
  <p class="info-list-item">Population: ${firstCountry.population}</p>
  <p class="info-list-item">Languages: ${Object.values(
    firstCountry.languages
  ).join(', ')}</p>
    `;
}

export { createCountryList, createCountryInfo };
