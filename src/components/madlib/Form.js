import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import styles from './Form.css';


const partsOfSpeech = ['adjective', 'noun', 'verb, past tense',
  'adverb', 'adjective', 'noun', 'noun',
  'adjective', 'verb', 'adverb', 'verb, past tense', 'adjective'];

const Form = ({ onSubmit, onChange, onClear, words }) => (
  <div>
    <div className={styles.InputBox}>
      {partsOfSpeech.map((pos, i) => <Input value={words[i]} key={i} placeholder={pos} onChange={onChange} index={i} />)}
    </div>
    <div className={styles.ButtonBox}>
      <button className={styles.Button} onClick={onSubmit}>Create Madlib</button>
      <button className={styles.Button} onClick={onClear}>Clear Form</button>
    </div>
  </div>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  words: PropTypes.array.isRequired
};

export default Form;
