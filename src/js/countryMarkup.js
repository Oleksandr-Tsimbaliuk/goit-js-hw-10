function createCountryList(arrayCountries) {
  return arrayCountries
    .map(
      country => `
    <li class = "country-list-item">
  <img
    class="country-img"
    src="${country.flags.svg}"
    alt="country-img"
    width="30"
    height="20"
  />
  <h2 class="country-name">${country.name.common}</h2>
</li>`
    )
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

<ul class="country-info-list">
  <li class="info-list-item">Capital: ${firstCountry.capital}</li>
  <li class="info-list-item">Population: ${firstCountry.population}</li>
  <li class="info-list-item">
    Languages: ${Object.values(firstCountry.languages).join(', ')}
  </li>
</ul>`;
}

export { createCountryList, createCountryInfo };
