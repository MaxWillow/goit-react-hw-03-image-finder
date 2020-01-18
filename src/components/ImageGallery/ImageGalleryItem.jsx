import React from 'react';
import T from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ picture: { webformatURL, largeImageURL } }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={largeImageURL}
      className={styles.ImageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  picture: T.shape({
    webformatURL: T.string.isRequired,
    largeImageURL: T.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
