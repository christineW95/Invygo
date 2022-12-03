import React from 'react'
import {  render } from '@testing-library/react-native'

import Label from '../../../App/components/Label'


describe('render Label successfully', () => {
  it('renders correctly', () => {
    const {queryByTestId} = render(<Label label='Test' />)
    const component=queryByTestId('Text_Component')
    expect(component).toBeTruthy()
    expect(component.children).toHaveLength(1)
    const value=component.children[0]
    expect(value).toEqual('Test')
  })
 
})
