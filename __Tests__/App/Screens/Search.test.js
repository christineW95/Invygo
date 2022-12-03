import React from 'react'
import {  render } from '@testing-library/react-native'

import Search from '../../../App/screens/Search'


describe('render Search screen successfully', () => {
    const navigation={
        navigate:jest.fn()
    }
  it('renders correctly', () => {
    const {getByTestId} = render(<Search navigation={navigation} />)
    const Search_Container=getByTestId('Search_Container')
    expect(Search_Container).toBeTruthy()
  })
 
})
