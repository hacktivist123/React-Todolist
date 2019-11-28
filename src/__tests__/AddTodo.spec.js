import React from 'react'
import { shallow } from 'enzyme'
import AddTodo from '../AddTodo';


describe('Add Todos', () => {
  
  it('should show text Add Todo and Simulate Submit', () => {
      const wrapper = shallow(<AddTodo addTodo={jest.fn()} />)
      const text = wrapper.find('div button');
      const preventDefault = jest.fn();

      wrapper.find('form').simulate('submit', {  preventDefault });
      wrapper.find('[name="addTodo"]').simulate('change', {
        target: {
          value: ''
        }
      })
      expect(text.text()).toBe('Add Todo');

  })
});