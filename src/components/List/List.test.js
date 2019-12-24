import React from 'react'
import { render } from '@testing-library/react'
import List from './index'
import mockData from '../../config/data.json'

function renderList(props) {
  const utils = render(
    <List
      columns={1}
      isPristine={true}
      isLoading={false}
      {...props}
    />
  );

  const list = utils.getByTestId('ug-list');
  return {...utils, list};
}

test('should have initial state with a welcome message', () => {
  const { getByText } = renderList();
  expect(getByText(/Uber Giphy/i)).toBeInTheDocument();
})

test('should have show no results message when it is not pristine without results', () => {
  const { getByText } = renderList({
    items: [],
    isPristine: false
  });
  expect(getByText(/No results here/i)).toBeInTheDocument();
})

test('should have has loading state when trigger loading', () => {
  const { getByText } = renderList({
    items: [],
    isPristine: false,
    isLoading: true,
  });
  expect(getByText(/Loading/i)).toBeInTheDocument();
})

test('can show image and title when there are items passed in', () => {
  const { list, getByText, getByAltText } = renderList({
    items: mockData.data,
  });
  expect(list.children.length).toBe(5);
  expect(getByText(mockData.data[0].title)).toBeInTheDocument();
  expect(getByAltText(mockData.data[0].title)).toBeInTheDocument();
})
