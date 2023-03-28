export function createCountryCard(arrayCountries) {
  firstCountry = arrayCountries[0];
  return `
    <img class="country-img"
    src="${firstCountry.flags.svg}"
    alt="country-img" width="30" height="20" />
    <h2 class="contry-name">${firstCountry.name.common}</h2>
    <div class="country-card">
      <ul class="country-info list">
        <li class="counrty-info-item">${firstCountry.capital}</li>
        <li class="counrty-info-item">${firstCountry.population}</li>
        <li class="counrty-info-item">${Object.values(
          firstCountry.languages
        )}</li>
      </ul>
    </div>`;
}

export function createCountryList(arrayCountries) {
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
