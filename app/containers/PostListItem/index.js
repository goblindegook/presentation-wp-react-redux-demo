/**
 * PostListItem
 *
 * Lists the name and the issue count of a repository
 */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectCurrentQuery } from 'containers/App/selectors';

import ListItem from 'components/ListItem';
import A from 'components/A';

import styles from './styles.css';

export class PostListItem extends React.Component {
  render() {
    const item = this.props.item;

    // Put together the content of the repository
    const content = (
      <div className={styles.linkWrapper}>
        <A
          className={styles.linkRepo}
          href={item.link}
          target="_blank"
        >
          {item.title.rendered}
        </A>
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.id}`} item={content} />
    );
  }
}

PostListItem.propTypes = {
  item: React.PropTypes.object,
  currentQuery: React.PropTypes.string,
};

export default connect(createSelector(
  selectCurrentQuery(),
  (currentQuery) => ({ currentQuery })
))(PostListItem);
