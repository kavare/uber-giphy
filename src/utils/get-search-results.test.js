import getSearchResults from './get-search-results'
import mockData from '../config/data.json';

beforeEach(() => {
  fetch.resetMocks();
})

test('should return search results', () => {
  fetch.mockResponseOnce(JSON.stringify(mockData));
  const onResponse = jest.fn();
  const onError = jest.fn();

  return getSearchResults('kitten', 0)
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse.mock.calls[0][0].data[0]).toEqual(mockData.data[0]);
    });
});

