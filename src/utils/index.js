import {
  GIPHY_URL,
  API_KEY,
  DEFAULT_QUERY,
} from '../config.js';

const buildSearchUrl = (options) => {
  let url = `${GIPHY_URL}?api_key=${API_KEY}`;
  let query = Object.assign({}, DEFAULT_QUERY, options);

  for (let [k, v] of Object.entries(query)) {
    url += `&${k}=${v}`;
  }

  return url;
}

export {
  buildSearchUrl,
}
