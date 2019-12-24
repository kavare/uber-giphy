import React from 'react'
import { render } from '@testing-library/react'
import NavBar from './index'

function renderNavbar(props) {
  const utils = render(<NavBar><h3>Children</h3></NavBar>);
  const navbar = utils.getByTestId('ug-navbar');
  return {...utils, navbar};
}

test('should be able to rendered with children', () => {
  const { getByText } = renderNavbar();
  expect(getByText(/Children/i)).toBeInTheDocument();
})

