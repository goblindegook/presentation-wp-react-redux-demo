import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectGlobal,
  selectCurrentQuery,
  selectLoading,
  selectError,
  selectPosts,
  selectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  const globalSelector = selectGlobal();
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});

describe('selectCurrentQuery', () => {
  const currentQuerySelector = selectCurrentQuery();
  it('should select the current query', () => {
    const query = 'wordpress';
    const mockedState = fromJS({
      global: {
        currentQuery: query,
      },
    });
    expect(currentQuerySelector(mockedState)).toEqual(query);
  });
});

describe('selectLoading', () => {
  const loadingSelector = selectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('selectError', () => {
  const errorSelector = selectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('selectPosts', () => {
  const postsSelector = selectPosts();
  it('should select the repos', () => {
    const posts = fromJS([]);
    const mockedState = fromJS({
      global: {
        posts,
      },
    });
    expect(postsSelector(mockedState)).toEqual(posts);
  });
});

describe('selectLocationState', () => {
  const locationStateSelector = selectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
