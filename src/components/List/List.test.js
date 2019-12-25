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

test('should respect pristine state so that when isPristine is true is should show welcome message', () => {
  const { list, getByText } = renderList({
    items: mockData.data,
    isPristine: true,
  });
  expect(list.children.length).toBe(1);
  expect(getByText(/Uber Giphy/i)).toBeInTheDocument();
})

test('should have show no results message when it is not pristine without results', () => {
  const { getByText } = renderList({
    items: [],
    isPristine: false,
  });
  expect(getByText(/No results here/i)).toBeInTheDocument();
})

test('can show image and title when there are items passed in', () => {
  const { list, getByText, getByAltText } = renderList({
    items: mockData.data,
    isPristine: false,
  });
  expect(list.children.length).toBe(5);
  expect(getByText(mockData.data[0].title)).toBeInTheDocument();
  expect(getByAltText(mockData.data[0].title)).toBeInTheDocument();
})
