/**
 * Test the searchPosts saga
 */

import expect from 'expect';
import { take, call, put, select, race } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { searchPosts } from '../sagas';

import { LOAD_POSTS } from 'containers/App/constants';
import { postsLoaded, postLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { selectQuery } from 'containers/HomePage/selectors';

const generator = searchPosts();
const query = 'wordpress';

describe('searchPosts Saga', () => {
  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    expect(generator.next().value).toEqual(race({
      loadPosts: take(LOAD_POSTS),
      stop: take(LOCATION_CHANGE),
    }));
    expect(generator.next(take(LOAD_POSTS)).value).toEqual(select(selectQuery()));
    const requestURL = `https://api.github.com/users/${query}/repos?type=all&sort=updated`;
    expect(generator.next(query).value).toEqual(call(request, requestURL));
  });

  xit('should dispatch the postsLoaded action if it requests the data successfully', () => {
    const response = {
      data: [{
        name: 'First post',
      }, {
        name: 'Second post',
      }],
    };
    expect(generator.next(response).value).toEqual(put(postsLoaded(response.data, query)));
  });

  xit('should call the postLoadingError action if the response errors', () => {
    const response = {
      err: 'Some error',
    };
    expect(generator.next(response).value).toEqual(put(postLoadingError(response.err)));
  });
});
