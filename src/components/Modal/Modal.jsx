import React from 'react';
import T from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => (
  <div className={styles.Overlay} onClick={onClose} role="presentation">
    <div className={styles.Modal}>
      <img src={largeImageURL} alt="" />
    </div>
  </div>
);

Modal.propTypes = {
  largeImageURL: T.string.isRequired,
  onClose: T.func.isRequired,
};

export default Modal;
