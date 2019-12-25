import buildSearchUrl from './build-search-url';

const getSearchResults = async (q, offset) => {
  const url = buildSearchUrl({q, offset});

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    throw Error(e);
  }
}

export default getSearchResults;
