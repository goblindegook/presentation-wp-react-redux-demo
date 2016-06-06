import expect from 'expect';
import homeReducer from '../reducer';
import {
  changeQuery,
} from '../actions';
import { fromJS } from 'immutable';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      query: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeQuery action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('query', fixture);

    expect(homeReducer(state, changeQuery(fixture))).toEqual(expectedResult);
  });
});
