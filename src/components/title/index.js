import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.m.css';

export default function Title({ name = 'User ' }) {
  return (
    <h1 className={styles.title}>
      Hello1
      {' '}
      {name}
    </h1>
  );
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
};
