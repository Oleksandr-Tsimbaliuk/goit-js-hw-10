const BASE_URL = 'https://restcountries.com/v3.1/';
const options = 'fields=name,capital,population,flags,languages';

export function fetchCountries(countryName) {
  return fetch(`${BASE_URL}name/${countryName}?${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
