import React from 'react'
import {   render } from '@testing-library/react-native'
import DropDown from '../../../App/components/DropDown'



describe('render Age picker successfully', () => {
    const props={
    label:"Number of Guests",
    placeholder:"Select number of guests",
    listItems:[1,2,3],
    onSelect:jest.fn(),
    selected:1}
  it('renders Picker correctly', () => {
    const {queryByTestId} = render(<DropDown {...props} />)
    const component=queryByTestId('Accordion_Component')
    expect(component).toBeTruthy()
    const title=component.props.title
    expect(title).toEqual(1)

    component.props.onPress()
    expect(component.props.expanded).toBeTruthy()

    const placeholder=component.props.placeholder
    expect(placeholder).toEqual(props.placeholder)

    const label=component.props.label
    expect(label).toEqual(props.label)

    expect(component.children).toHaveLength(1)

   
  })
  it('renders List correctly', () => {
    const {queryByTestId} = render(<DropDown {...props} />)
   
    const List_Component=queryByTestId('List_Component')
    expect(List_Component).toBeTruthy()

   
  })
 
})
