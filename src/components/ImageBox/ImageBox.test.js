import React from 'react'
import { render } from '@testing-library/react'
import ImageBox from './index'
import mockData from '../../config/data.json'

function renderImageBox(props) {
  const data = mockData.data[0];
  const utils = render(<ImageBox data={data} column={1} {...props}><h3>Children</h3></ImageBox>);
  const imageBox = utils.getByTestId('ug-image-box');
  return {...utils, imageBox};
}

test('should rendered a ImageBox', () => {
  const { imageBox } = renderImageBox();
  expect(imageBox).toBeInTheDocument();
})

test('can show image and title when there are items passed in', () => {
  const { getByText, getByAltText } = renderImageBox();
  expect(getByText(mockData.data[0].title)).toBeInTheDocument();
  expect(getByAltText(mockData.data[0].title)).toBeInTheDocument();
})

// test('should show different image in single column and three column modes', () => {
//   const getByAltTextSingleColumn = renderImageBox({column: 1}).getByAltText;
//   const getByAltTextThreeColumns = renderImageBox({column: 3}).getByAltText;
//   const singleColumn = getByAltTextSingleColumn(mockData.data[0].title)
//   const threeColumns = getByAltTextThreeColumns(mockData.data[0].title)
//   expect(singleColumn.alt).toBe(threeColumns.alt);
// })

