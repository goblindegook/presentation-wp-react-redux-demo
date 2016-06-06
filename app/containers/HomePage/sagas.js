/**
 * Gets the repositories of the user from Github
 */

/* eslint-disable no-constant-condition */

import fetch from 'isomorphic-fetch';

import { take, call, put, select, race } from 'redux-saga/effects';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postLoadingError } from 'containers/App/actions';
import { selectQuery } from 'containers/HomePage/selectors';

// Bootstrap sagas
export default [
  searchPosts,
];

function wpSearchPosts(query) {
  return fetch(`//composer.wordpress.dev/wp-json/wp/v2/posts?filter[s]=${query}`)
    .then(response => response.json());
}

// Individual exports for testing
export function* searchPosts() {
  while (true) {
    const watcher = yield race({
      loadPosts: take(LOAD_POSTS),
      stop:      take(LOCATION_CHANGE), // stop watching if user leaves page
    });

    if (watcher.stop) break;

    const query = yield select(selectQuery());

    try {
      // Use call from redux-saga for easier testing
      const posts = yield call(wpSearchPosts, query);
      console.log(posts); // eslint-disable-line no-console
      yield put(postsLoaded(posts, query));
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
      yield put(postLoadingError(error));
    }
  }
}
