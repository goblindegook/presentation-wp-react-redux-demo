import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectHome,
  selectQuery,
} from '../selectors';

describe('selectHome', () => {
  const homeSelector = selectHome();
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(homeSelector(mockedState)).toEqual(homeState);
  });
});

describe('selectQuery', () => {
  const querySelector = selectQuery();
  it('should select the query', () => {
    const query = 'wordpress';
    const mockedState = fromJS({
      home: {
        query,
      },
    });
    expect(querySelector(mockedState)).toEqual(query);
  });
});
