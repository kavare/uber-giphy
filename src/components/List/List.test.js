import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import List from './index'
import mockData from '../../config/data.json'

test('can show image and title when there are items passed in', () => {
  const items = mockData.data;
  const {getByText, queryByText, getByAltText} = render(
    <List items={items} />,
  )

  expect(getByText(items[0].title)).toBeInTheDocument()
  expect(getByAltText(items[0])).toBeInTheDocument()
  // fireEvent.click(getByText(footware.title))
  // expect(getByText(footware.contents)).toBeInTheDocument()
  // expect(queryByText(hats.contents)).toBeNull()
})