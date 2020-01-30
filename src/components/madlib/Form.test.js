import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = shallow(<Form words={new Array(12).fill('')} onSubmit={() => {}} onChange={() => {}} onClear={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
