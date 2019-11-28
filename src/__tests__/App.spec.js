import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import Todos from '../Todos'

describe('Main Page Test', () => {
  it('should render a h1 element correctly', () => {
  const wrapper = shallow(<App deleteTodo={jest.fn()} addTodo={jest.fn()}/>)
  const text = wrapper.find('h1')
  expect(text.text()).toBe("Todos")
  
  });

  it('should addTodo to state', () => {
    const wrapper = mount(<App />);

    wrapper.setState({content: 'test'})
    wrapper.find('button').simulate('click', {
      preventDefault: () => {}
    })

    expect(wrapper.state().content).toBe('test')

  })

  it('should delete todo', () => {
    const deleteTodo=jest.fn()

  const wrapper = mount(<Todos todos={['test']} deleteTodo={deleteTodo}/>);
    wrapper.find('span').simulate('click', {});

    expect(wrapper).toMatchSnapshot();
  })

});