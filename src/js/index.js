import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import '../css/styles.css';

import { fetchCountries } from './fetchCountries';
import { getRefs } from './getRefs';
import { createCountryCard, createCountryList } from './countryMarkup';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
let arrayCountries = [];
// arrayCountries --- place for save objectsCountries
// data           --- arrayOfObjectsCountries from backend
// country        --- object of Country
// const debounce = require('lodash');------------------------------------------------------------------------------

refs.searchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(event) {
  countryName = event.target.value.trim();

  if (!event.target.value) {
    return;
  }

  fetchCountries(countryName)
    .then(Data => {
      Data.map(country => {
        console.log(country);
        arrayCountries.push(country);
      });
      console.log(arrayCountries);
      renderCountryCard(arrayCountries);
    })
    .catch(error =>
      console.log(
        Notiflix.Notify.failure('Oops, there is no country with that name')
      )
    );
}

function renderCountryCard(country) {
  if (arrayCountries.length > 10) {
    Notiflix.Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (arrayCountries.length >= 2 && arrayCountries.length < 10) {
    refs.countryList.innerHTML = createCountryList(country);
    return;
  }
  refs.countryInfo.innerHTML = createCountryCard(country);
  // const markup = createCountryCard();
  // refs.countryInfo.innerHTML = markup;
}
