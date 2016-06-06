/**
 * Test the HomePage
 */

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { HomePage } from '../index';
import PostListItem from 'containers/PostListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';

describe('<HomePage />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <HomePage loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <HomePage
        loading={false}
        error={{ message: 'Loading failed!' }}
      />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Something went wrong, please try again!')
      ).toBeGreaterThan(-1);
  });

  it('should render posts if loading was successful', () => {
    const posts = [{
      link: 'http://wordpress/post-title',
      title: {
        rendered: 'Post Title',
      },
    }];
    const renderedComponent = shallow(
      <HomePage
        posts={posts}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={posts} component={PostListItem} />)).toEqual(true);
  });
});
