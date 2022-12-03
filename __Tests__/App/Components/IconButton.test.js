import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import IconButton from '../../../App/components/IconButton'


describe('render Text Input successfully', () => {
  it('renders correctly', () => {
    const onPress=jest.fn()
    const {queryByTestId} = render(<IconButton  iconName='md-search' onPress={onPress}/>)
    const component=queryByTestId('IconButton_Component')
    expect(component).toBeTruthy()
    fireEvent.press(component)
    expect(onPress).toHaveBeenCalled()
  })
  
})
