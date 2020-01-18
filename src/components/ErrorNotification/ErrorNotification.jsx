import React from 'react';
import T from 'prop-types';

const ErrorNotification = ({ text }) => <h1>Something went wrong: {text} </h1>;

ErrorNotification.defaultProps = {
  text: 'Please, try again!',
};

ErrorNotification.propTypes = {
  text: T.string,
};

export default ErrorNotification;
