import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input component', () => {
  it('renders Input', () => {
    const wrapper = shallow(<Input value={'wobble!'} key={1} placeholder={'wibble!'} onChange={() => {}} index={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});
