import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const partsOfSpeech = ['adjective', 'noun', 'verb, past tense',
  'adverb', 'adjective', 'noun', 'noun',
  'adjective', 'verb', 'adverb', 'verb, past tense', 'adjective'];

const Form = ({ onSubmit, onChange, onClear, words }) => (
  <div>
    <form onSubmit={onSubmit}>
      {partsOfSpeech.map((pos, i) => <Input value={words[i]} key={i} placeholder={pos} onChange={onChange} index={i} />)}
      <button>Create Madlib</button>
    </form>
    <button onClick={onClear}>Clear Form</button>
  </div>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  words: PropTypes.array.isRequired
};

export default Form;
