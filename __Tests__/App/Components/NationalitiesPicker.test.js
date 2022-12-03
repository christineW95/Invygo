import React from 'react'
import {   act, render, waitFor } from '@testing-library/react-native'
import NationalitiesDropdown from '../../../App/components/NationalitiesPicker'



describe('render Nationalities picker successfully', () => {
    const props={
    label:"Number of Guests",
    listItems:[1,2,3],
    onSelect:jest.fn(),
    selected:{country:'Egypt'}}
  it('renders Picker correctly', () => {
    const {queryByTestId} = render(<NationalitiesDropdown {...props} />)
    const component=queryByTestId('Accordion_Component')
    expect(component).toBeTruthy()
    const title=component.props.title
    expect(title).toEqual(props.selected.country)

    const label=component.props.label
    expect(label).toEqual(props.label)

    expect(component.children).toHaveLength(1)

   
  })


  // it("should render and update a counter", () => {
  //   const { getByTestId } = render(<NationalitiesDropdown {...props} />)
  //   const component=getByTestId('Accordion_Component')
  //   expect(component).toBeTruthy()

  //   const label=component.props.label
  //   expect(label).toEqual(props.label)

  //   expect(component.children).toHaveLength(1)

  // })
 
})
