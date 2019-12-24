import React from 'react'
import { render } from '@testing-library/react'
import IconButton from './index'

function renderIconButton(props) {
  const utils = render(<IconButton><h3>Children</h3></IconButton>);
  const iconButton = utils.getByTestId('ug-icon-button');
  return {...utils, iconButton};
}

test('should rendered a IconButton', () => {
  const { iconButton } = renderIconButton();
  expect(iconButton).toBeInTheDocument();
})

