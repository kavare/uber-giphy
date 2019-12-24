import React from 'react'
import { render } from '@testing-library/react'
import Layout from './index'

function renderLayout(props) {
  const utils = render(<Layout><h3>Children</h3></Layout>);
  const layout = utils.getByTestId('ug-layout');
  return {...utils, layout};
}

test('should be able to rendered with children', () => {
  const { getByText } = renderLayout();
  expect(getByText(/Children/i)).toBeInTheDocument();
})

