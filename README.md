# Uber-Giphy
A simple responsive Giphy interface for fun. Real-time infinite scroll with single/3-column layoute.

## Project Setup
### `yarn start`:
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
Launches the test runner in the interactive watch mode.<br />
Tests including unit tests for UI components and utility functions, as well as integration tests for
loading images from mock API.

### `yarn build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn deploy`
Leverage on [gh-pages](https://github.com/tschaub/gh-pages) to deploy seamlessly to Github. <br />
The working app is running under https://kavare.github.io/uber-giphy/.

## Features
- GIPHY image search API and shows the results in a 1-column scrollable view (like Instagram).
- Support endless scrolling, automatically requesting and displaying more images when the user scrolls to the bottom of the view.
- Users could enter arbitrary words to get the images from Giphy (default to G rating).
- Users could toggle between 1-column and 3-column views.

## Architecture
For simplicity this project use React Hook to handle state management for the whole app. I choose Hook over Redux due to its simple use case with limited states (show below). The entry point is `index.js` under `src` folder. `App.js` serves as the root container components which holding the states and actions logic such as search, loading state, and column rearrangement. The rest of the UI components (stateless dump components) are listed under `components` folder.

The core logic for infinite scoll is encapsulated into a custom hook under `hooks` folder. Other utility functions such as fetching data from API (get-search-result.js), building search url based on user query (build-search-url.js) and checking whether the page is reaching to the bottom (is-at-bottom.js) reside under `utils` folder.

`config` folder contains image assets, scss variables and mixins, and some global variables which could be changed overtime (e.g. baseURL to api endpoint, access token, etc).

Most of the test cases are sitting side-by-side to the component/functions which they target for. This way it's easier to add/remove the test as the project grows.

### Folder Structures
```
src/
├── components/
│   ├── IconButton/
│   ├── ImageBox/
│   ├── Layout/
│   ├── List/
│   ├── NavBar/
│   └── SearchBar/
├── config/
│   ├── _variables.scss
│   ├── config.js
│   ├── data.json
│   └── other image assets
├── containers/
├── hooks/
│   ├── useDebounce.js
│   └── useInfiniteScroll.js
├── utils/
│   ├── build-search-url.js
│   ├── get-search-result.js
│   └── is-at-bottom.js
├── app.js
└── index.js
```
### States
- Initial state: show welcome message on the screen. One can return to this state by clicking on the logo on top-left corner (isPristine).
- Loading state: show loading message on the screen. When _Load More_ action is triggered, it will transit to this state until it get results from the api service. (isLoading)
- Display state: depending on the response, one may see a list of gif images or a message indicates that there are no results under this search terms. (hasResults)

### Actions
- Search
  - When change text in search bar
  - When search bar revert to empty
  - Whne search the keywords that is used before
- Load More
  - When scroll to bottom
  - When keywords changed
- Rearrange
  - When click on layout change button

## Tech Stack
- `create-react-app (CRA)`: a scaffolding tool for simple React project
- `React Hook`: a new feature in React ecosystem starts from v16.8+. Allow functional components to be more "stateful" with composible hooks.
- `React-testing-library`: the official recommended testing library which embrace integration tests over implementation details.
- `scss`: a css pre-processor which allow nested css, shared variables, and mixins.

### Future Optimization
- [x] Debounce for user input
- [ ] Catch for most recent 5 search results
- [ ] Implement masonry layout in 3-column-mode
- [ ] Encapsulate api service as a module instead of a single util function

