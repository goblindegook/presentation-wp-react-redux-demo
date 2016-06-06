import expect from 'expect';

import {
  CHANGE_QUERY,
} from '../constants';

import {
  changeQuery,
} from '../actions';

describe('Home Actions', () => {
  describe('changeQuery', () => {
    it('should return the correct type and the passed query', () => {
      const fixture = 'WordPress';
      const expectedResult = {
        type: CHANGE_QUERY,
        query: fixture,
      };

      expect(changeQuery(fixture)).toEqual(expectedResult);
    });
  });
});
