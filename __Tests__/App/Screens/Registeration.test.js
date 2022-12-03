import React from 'react'
import {  render } from '@testing-library/react-native'

import Registeration from '../../../App/screens/Registeration'


describe('render Registeration screen successfully', () => {
    const navigation={
        navigate:jest.fn()
    }
  it('renders correctly', () => {
    const {getByTestId} = render(<Registeration navigation={navigation} />)
    const Logo_Component=getByTestId('Logo_Component')
    expect(Logo_Component).toBeTruthy()
  })
 
})
