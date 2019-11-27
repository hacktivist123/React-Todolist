import React from 'react'
import { shallow,mount } from 'enzyme'
import AddTodo from '../AddTodo';


describe('Add Todos', () => {
  
  it('should show text Add Todo and Simulate Submit', () => {
      const wrapper = shallow(<AddTodo handleChange={jest.fn()} handleSubmit={jest.fn()} addTodo={jest.fn()} />)
      const handleChange = jest.fn();
      const text = wrapper.find('div button');
      const preventDefault = jest.fn();

      wrapper.find('form').simulate('submit', {  preventDefault, handleChange });
      expect(text.text()).toBe('Add Todo');

  })
});