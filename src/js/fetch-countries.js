const ORIGIN_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: ['name', 'capital', 'population', 'flags', 'languages'],
});

export function fetchCountries(country) {
  return fetch(`${ORIGIN_URL}${country}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
