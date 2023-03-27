import '../css/styles.css';
import { fetchCountries } from './fetchCountries';
import { getRefs } from './getRefs';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

// .addEventListener('input', );

fetchCountries();
// console.dir(refs.searchBox);
