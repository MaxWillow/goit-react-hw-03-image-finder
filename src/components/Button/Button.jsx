import React from 'react';
import T from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onLoadMore }) => (
  <button type="button" onClick={onLoadMore} className={styles.Button}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: T.func.isRequired,
};

export default Button;
