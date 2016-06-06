/**
 * Test the repo list item
 */

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { PostListItem } from '../index';
import ListItem from 'components/ListItem';

describe('<PostListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      title: {
        rendered: 'Post Title',
      },
      link: 'http://composer.wordpress.dev/post',
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <PostListItem item={item} />
    );
    expect(renderedComponent.find(ListItem).length).toEqual(1);
  });

  it('should render the post name', () => {
    const renderedComponent = mount(
      <PostListItem item={item} />
    );
    expect(renderedComponent.text().indexOf(item.title.rendered)).toBeGreaterThan(-1);
  });
});
