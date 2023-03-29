// ============== named
const BASE_URL = 'https://restcountries.com/v3.1/';
const options = 'fields=name,capital,population,flags,languages';
// export { fetchCountries };

// return promise.promis(response.json()).then(data => ())
// return fetch(`${BASE_URL}name/${countryName}?${options}`).then(response =>response.json());
export function fetchCountries(countryName) {
  return fetch(`${BASE_URL}name/${countryName}?${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// ================= default
// const BASE_URL = 'https://restcountries.com/v3.1/';
// function fetchCountries() {
//   fetch(`${BASE_URL}all`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// export default { fetchCountries };
// import API from './fetchCountries';
