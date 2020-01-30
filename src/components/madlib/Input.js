import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

const Input = ({ placeholder, onChange, index, value }) => (
  <input className={styles.Input} value={value} name={'input' + index} type="text" onChange={onChange} placeholder={placeholder} />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
