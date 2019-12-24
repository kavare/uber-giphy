import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render with default title with Navbar and List components', () => {
  const { getByText, getByTestId } = render(<App />);
  expect(getByText(/Uber Giphy/i)).toBeInTheDocument();
  expect(getByTestId('ug-navbar')).toBeInTheDocument();
  expect(getByTestId('ug-list')).toBeInTheDocument();
});
