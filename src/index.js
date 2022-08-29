// Styles
import './css/styles.css';
// Functions and refs
import { fetchCountries } from './js/fetch-countries';
import { ref } from './js/refs';
import {
  oneCountryMarkup,
  groupOfCountriesMarkup,
  clearData,
} from './js/mark-up';
// Modules
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

ref.input.addEventListener('input', debounce(onHandleInput, DEBOUNCE_DELAY));

function onHandleInput(e) {
  e.preventDefault();

  const trimValue = e.target.value.trim();
  clearData();

  if (trimValue !== '') {
    fetchCountries(trimValue)
      .then(response => {
        if (response.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (response.length >= 2 && response.length <= 10) {
          groupOfCountriesMarkup(response);
        } else if (response.length === 1) {
          oneCountryMarkup(response);
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }
}
