/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentQuery: false,
  posts: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('posts', false);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('posts', action.posts)
        .set('loading', false)
        .set('currentQuery', action.query);
    case LOAD_POSTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
