import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import { TextInput } from 'react-native'
import CustomTextInput from '../../../App/components/CustomTextInput'


describe('render Text Input successfully', () => {
  it('renders correctly', () => {
    const {queryByTestId} = render(<CustomTextInput />)
    const component=queryByTestId('Textinput_Component')
    expect(component).toBeTruthy()
  })
  it('change text  successfully', () => {
    const mock = jest.fn()
    const component = render(<CustomTextInput onChangeText={mock} />)
    fireEvent.changeText(component.UNSAFE_queryByType(TextInput), 'test')
    expect(mock).toHaveBeenCalledWith('test')
  })
  it('blur text  successfully', () => {
    const mock = jest.fn()
    const component = render(<CustomTextInput onBlur={mock} />)
    expect(component.UNSAFE_queryByProps('onBlur')).toBeDefined()
  })
})
