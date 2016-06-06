import expect from 'expect';

import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
} from '../constants';

import {
  loadPosts,
  postsLoaded,
  postLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadPosts', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_POSTS,
      };

      expect(loadPosts()).toEqual(expectedResult);
    });
  });

  describe('postsLoaded', () => {
    it('should return the correct type and the passed posts', () => {
      const fixture = ['Test'];
      const query = 'test';
      const expectedResult = {
        type: LOAD_POSTS_SUCCESS,
        posts: fixture,
        query,
      };

      expect(postsLoaded(fixture, query)).toEqual(expectedResult);
    });
  });

  describe('postLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_POSTS_ERROR,
        error: fixture,
      };

      expect(postLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
