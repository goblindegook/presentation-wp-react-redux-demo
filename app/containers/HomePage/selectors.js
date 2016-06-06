/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectQuery = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('query')
);

export {
  selectHome,
  selectQuery,
};
