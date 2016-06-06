import expect from 'expect';
import appReducer from '../reducer';
import {
  loadPosts,
  postsLoaded,
  postLoadingError,
} from '../actions';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentQuery: false,
      posts: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadPosts action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('posts', false);

    expect(appReducer(state, loadPosts())).toEqual(expectedResult);
  });

  it('should handle the postsLoaded action correctly', () => {
    const fixture = [{
      title: {
        rendered: 'My Repo',
      },
    }];
    const query = 'test';
    const expectedResult = state
      .set('posts', fixture)
      .set('loading', false)
      .set('currentQuery', query);

    expect(appReducer(state, postsLoaded(fixture, query))).toEqual(expectedResult);
  });

  it('should handle the postLoadingError action correctly', () => {
    const fixture = new Error('Not found');
    
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, postLoadingError(fixture))).toEqual(expectedResult);
  });
});
