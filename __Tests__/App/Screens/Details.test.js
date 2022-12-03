import React from 'react'
import {  render } from '@testing-library/react-native'

import Details from '../../../App/screens/Details'


describe('render Search screen successfully', () => {
    const navigation={
        navigate:jest.fn()
    }
    const route={
        params:{
            user:{
                "id": 1,
                "name": "Prent",
                "address": "2847 Stephen Place",
                "nationality": "Indonesia",
                "dob": "4/27/2022",
                "numOfGuests": 1,
                "profession": "Student",
                "age": 18
              }
        }
    }
  it('renders correctly', () => {
    const {getByTestId,queryAllByTestId} = render(<Details navigation={navigation} route={route} />)
    const Details_Container=getByTestId('Details_Container')
    expect(Details_Container).toBeTruthy()


    const Logo=getByTestId('Logo')
    expect(Logo).toBeTruthy()


    const Profession_value=getByTestId('Profession_value')
    expect(Profession_value).toBeTruthy()
    expect(Profession_value.props.children).toEqual('Student')


    const Age_value=getByTestId('Age_value')
    expect(Age_value).toBeTruthy()
    expect(Age_value.props.children).toEqual(18)




    const results=queryAllByTestId('Nationality_Component')
    expect(results[0]).toBeTruthy()
    expect(results[0].props.children).toEqual("Indonesia")


    expect(results[1]).toBeTruthy()
    expect(results[1].props.children).toEqual("4/27/2022")

    expect(results[2]).toBeTruthy()
    expect(results[2].props.children).toEqual("2847 Stephen Place")


    expect(results[3]).toBeTruthy()
    expect(results[3].props.children).toEqual(1)


    
  })
 
})
