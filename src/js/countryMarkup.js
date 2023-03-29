import { getRefs } from './getRefs';
const refs = getRefs();
export { createCountryList, createCountryInfo };

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
  refs.countryInfo.innerHTML = arrayCountries.map(country => {
    return `
  <div class="country-info-box">
  <img
    class="country-img"
    src="${country.flags.svg}"
    alt="country-img"
    width="30"
    height="20"
  />
  <h2 class="country-name">${country.name.common}</h2>
</div>
 <ul class="country-info-list">
    <li class="info-list-item">Capital: ${country.capital}</li>
    <li class="info-list-item">Population: ${country.population}</li>
    <li class="info-list-item">Languages: ${country.languages.join(', ')}</li>
  </ul>`;
  });
}

// function createCountryInfo(arrayCountries) {
//   refs.countryInfo.innerHTML = arrayCountries.map(country => {
//     return `
//   <div class="country-info-box">
//   <img
//     class="country-img"
//     src="${country.flags.svg}"
//     alt="country-img"
//     width="30"
//     height="20"
//   />
//   <h2 class="country-name">${country.name.common}</h2>
// </div>
//   <p class="info-list-item">Capital: ${country.capital}</p>
//   <p class="info-list-item">Population: ${country.population}</p>
//   <p class="info-list-item">Languages: ${country.languages.join(', ')}</p>
//     `;
//   });
// }
