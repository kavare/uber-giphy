import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import App from './App';
import mockData from './config/data.json';

describe('App Integration Test', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })

  afterEach(cleanup);

  test('should matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with default title with Navbar and List components', () => {
    const { getByText, getByTestId } = render(<App />);
    expect(getByText(/Uber Giphy/i)).toBeInTheDocument();
    expect(getByTestId('ug-navbar')).toBeInTheDocument();
    expect(getByTestId('ug-list')).toBeInTheDocument();
  });

  test('should get response from API and render on the screen after key-in keywords', async () => {
    fetch.mockResponse(JSON.stringify(mockData));
    const { getByTestId, getByText, getByAltText } = render(<App />);
    const searchInput = getByTestId('ug-searchbar__input');
    fireEvent.change(searchInput, {target: {value: 'santa'}});

    await wait(() => {
      expect(fetch.mock.calls.length).toEqual(1)
      expect(getByTestId('ug-list').children.length).toBe(5);
      expect(getByText(mockData.data[0].title)).toBeInTheDocument();
      expect(getByAltText(mockData.data[0].title)).toBeInTheDocument();
    })
  })

  test('should load more items when scroll to bottom', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const { getByTestId, getByText, getByAltText } = render(<App />);
    const searchInput = getByTestId('ug-searchbar__input');
    const searchList = getByTestId('ug-list');
    fireEvent.change(searchInput, {target: {value: 'santa'}});

    await wait(() => {
      expect(searchList.children.length).toEqual(5);
      expect(getByText(mockData.data[0].title)).toBeInTheDocument();
      expect(getByAltText(mockData.data[0].title)).toBeInTheDocument();
    })

    const dummyData = Object.assign({}, mockData, {data: [{
      id: 'dummyabc',
      title: 'dummy',
      images: {
        fixed_width: {webp: '', url: ''},
      }
    }]})
    fetch.mockResponseOnce(JSON.stringify(dummyData))

    await fireEvent.scroll(window, {target: {scrollY: 5000}});
    await wait(() => {
      expect(fetch.mock.calls.length).toEqual(2);
      expect(searchList.children.length).toEqual(6);
    })
  })
})