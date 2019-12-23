# Uber-Giphy Specification
## Spec
- Write a web app that uses the GIPHY image search API and shows the results in a
1-column scrollable view (like Instagram).
- The app must support endless scrolling, automatically requesting and displaying
more images when the user scrolls to the bottom of the view.
- The app must let users enter queries
- Full Test coverage
- Allow the user to toggle between 1-column and 3-column views.
- We should be able to clone your code from Github, then run the project by following
a README.

## Todos
- [x] Setup components structure
- [x] Integrate Giphy API
- [x] Implement search feature
- [x] Implement infinite scroll feature
- [x] Update search results UI
- [x] Update navbar UI
- [ ] Improve test coverage for UI components
- [ ] Improve test coverage for hooks/utils
- [ ] Implement 3 columns transition
- [ ] Update Readme doc

## Actions
- Search
  - When change text in search bar
  - When search bar revert to empty
  - Whne search the keywords that is used before
- Load More
  - When scroll to bottom
  - When search is triggered
- Change View
  - When click on change columns button


## Optimization
- [x] Debounce for query
- [ ] Loading state for img src:
- [ ] Animation for 1 to 3 columns transition
- [ ] Catch for most recent 5 search results?
