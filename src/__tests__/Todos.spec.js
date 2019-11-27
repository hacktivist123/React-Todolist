import React from 'react'
import { shallow } from 'enzyme'
import Todos from '../Todos';

describe('Todos', () => {
  it('should render todos correctly with an array of todos', () => {
    const wrapper = shallow(<Todos todos={[{
      id: 1,
      content: 'test'
    }]} deleteTodo={jest.fn()} />);

    wrapper.find('span').simulate('click', () => {});
    expect(wrapper).toMatchSnapshot();
  })
  it('should render todos list with an empty array', () => {
    const wrapper = shallow(<Todos todos={[]} deleteTodo={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  })
});