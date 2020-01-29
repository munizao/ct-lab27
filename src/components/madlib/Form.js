import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Input placeholder="adjective" />
    <Input placeholder="noun" />
    <Input placeholder="verb, past tense" />
    <Input placeholder="adverb" />
    <Input placeholder="adjective" />
    <Input placeholder="noun" />
    <Input placeholder="noun" />
    <Input placeholder="adjective" />
    <Input placeholder="verb" />
    <Input placeholder="adverb" />
    <Input placeholder="verb, past tense" />
    <Input placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
