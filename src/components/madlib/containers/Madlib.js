import React, { Component } from 'react';
import Form from '../Form';
import Result from '../Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: new Array(12).fill("")
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));


  handleChange = ({ target }) => {
    this.setState((state) => {
      const newWords = state.words.slice();
      const index = target.name.slice(5);
      newWords[index] = target.value;
      return { ...state, words:newWords };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.toggleResult();
  }

  handleClear = () => {
    this.setState(() => ({
      words: new Array(12).fill('')
    }));
    this.render();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form words={this.state.words} onSubmit={this.handleSubmit} onChange={this.handleChange} onClear={this.handleClear} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
