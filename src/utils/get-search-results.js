import buildSearchUrl from './build-search-url';

const getSearchResults = async (q, offset) => {
  const url = buildSearchUrl({q, offset});

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default getSearchResults;
