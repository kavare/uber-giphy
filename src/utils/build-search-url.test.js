import {
  GIPHY_URL,
  API_KEY,
  DEFAULT_QUERY,
} from '../config/config.js';
import buildSearchUrl from './build-search-url';

let url;
beforeEach(() => {
  url = `${GIPHY_URL}?api_key=${API_KEY}`;
})

test('it should use config value as base url', () => {
  for (let [k, v] of Object.entries(DEFAULT_QUERY)) url += `&${k}=${v}`;
  expect(buildSearchUrl()).toEqual(`${url}`)
})

test('it should allow overwrite to default query params', () => {
  const options = {...DEFAULT_QUERY, limit: 100, offset: 100};
  for (let [k, v] of Object.entries(options)) url += `&${k}=${v}`;
  expect(buildSearchUrl(options)).toEqual(`${url}`)
})

test('it should allow arbitrary query params', () => {
  const options = {...DEFAULT_QUERY, foo: 'foo', bar: 'bar'};
  for (let [k, v] of Object.entries(options)) url += `&${k}=${v}`;
  expect(buildSearchUrl(options)).toEqual(`${url}`)
})