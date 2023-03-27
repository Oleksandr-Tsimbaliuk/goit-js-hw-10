// ============== named
const BASE_URL = 'https://restcountries.com/v3.1/';
export { fetchCountries };

const fetchCountries = () => {
  fetch(`${BASE_URL}all`)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

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
