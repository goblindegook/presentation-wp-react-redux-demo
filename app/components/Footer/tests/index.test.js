import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <p>This project is licensed under the MIT license.</p>
      </section>
    )).toEqual(true);
  });
});
