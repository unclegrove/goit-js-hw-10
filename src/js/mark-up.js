import { ref } from './refs';

export function groupOfCountriesMarkup(countries) {
  const renderGroupOfContries = countries
    .map(country => {
      return `<li>
              <img src="${country.flags.svg}" alt="Flag of ${country.name.official} width="30" height="30">
              <p><b>${country.name.official}</b></p>
              </li>`;
    })
    .join('');

  ref.list.innerHTML = renderGroupOfContries;
}

export function oneCountryMarkup(countries) {
  const renderOneCountry = countries
    .map(country => {
      return `<li>
            <img src="${country.flags.svg}" alt="Flag of ${
        country.name.official
      } width="30" height="30">
            <p><b>${country.name.official}</b></p>
            <p><b>Capital: </b>${country.capital}</p>
            <p><b>Population: </b>${country.population}</p>
            <p><b>Languages: </b>${Object.values(country.languages)}</p>
            </li>`;
    })
    .join('');
  ref.list.innerHTML = renderOneCountry;
}

export function clearData() {
  ref.list.innerHTML = '';
  ref.info.innerHTML = '';
}
