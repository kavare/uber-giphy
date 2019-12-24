import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import SearchBar from './index'

function renderSearchBar(props) {
  const utils = render(
    <SearchBar {...props} />
  );

  const searchBar = utils.getByTestId('ug-searchbar');
  const searchBarInput = utils.getByTestId('ug-searchbar__input');
  return {...utils, searchBar, searchBarInput};
}

test('should have a searchbar wrapper and searchbar input', () => {
  const { searchBar, searchBarInput } = renderSearchBar();
  expect(searchBar).toBeInTheDocument();
  expect(searchBarInput).toBeInTheDocument();
})

test('should receive passed in keywords and able to be changed', () => {
  const updateKeywords = jest.fn();
  const { searchBarInput } = renderSearchBar({
    keywords: 'kitten',
    updateKeywords,
  });

  expect(searchBarInput.value).toBe('kitten');
  fireEvent.change(searchBarInput, {target: {value: 'dog'}});
  expect(updateKeywords).toHaveBeenCalledTimes(1);
  searchBarInput.value = 'dog';
  expect(searchBarInput.value).toBe('dog');
  expect(updateKeywords).toHaveBeenCalledTimes(1);
})
