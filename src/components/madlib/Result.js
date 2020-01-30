import React from 'react';
import PropTypes from 'prop-types';
import styles from './Result.css';

import { zoo } from '../../services/madlib';

const Result = ({ words, closeResult }) => (
  <div className={styles.Result}>
    <p>{zoo(...words)}</p>
    <button onClick={closeResult}>X</button>
  </div>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;
