import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import '../css/styles.css';

import { fetchCountries } from './fetchCountries';
import { getRefs } from './getRefs';
import { createCountryInfo, createCountryList } from './countryMarkup';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
let arrayCountries = null;
refs.countryList.classList.add('hidden');
refs.countryInfo.classList.add('hidden');

refs.searchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));
function onSearchBox(event) {
  let countryName = event.target.value.trim();
  arrayCountries = [];

  if (!countryName) {
    cleareMarckap();
    return;
  }

  fetchCountries(countryName)
    .then(Data => {
      Data.map(country => {
        arrayCountries.push(country);
      });

      cleareMarckap();
      renderCountryCard(arrayCountries);
    })
    .catch(error => {
      console.log(error, error.stack);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function renderCountryCard(country) {
  if (arrayCountries.length > 10) {
    Notiflix.Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (arrayCountries.length >= 2 && arrayCountries.length < 10) {
    refs.countryList.classList.remove('hidden');
    createCountryList(country);
    return;
  } else {
    refs.countryInfo.classList.remove('hidden');
    createCountryInfo(country);
  }
}

function cleareMarckap() {
  refs.countryList.classList.add('hidden');
  refs.countryInfo.classList.add('hidden');
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
