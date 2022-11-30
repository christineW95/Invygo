import { testProps } from '../Utils/utils.helper'
import React, { useRef } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import IconButton from './IconButton'
import Colors from '../constants/Colors'



type ScrollableTextInputProps = {
  placeholder: string
  onChangeText: Function
  value: string
}
const ScrollableTextInput = ({
  placeholder,
  value,
  onChangeText,
}: ScrollableTextInputProps) => {
  const {
    content,
    flexOne,
    textInputWrapper,
  } = styles
  const refInput = useRef()
  const isClearBtnShown = value !== '' && value?.trim().length > 0
  const onPress = () => {
    refInput?.current?.clear()
    onChangeText(null)
  }
  return (
    <View {...testProps('ScrollableTextInput_ScrollView')} style={content}>
      <View style={flexOne}>
      <IconButton iconName="md-search" size={15} color="green" />
      </View>
      <View
        style={textInputWrapper}
        {...testProps('ScrollableTextInput_textInputWrapper')}>
        <TextInput
          ref={refInput}
          style={flexOne}
          spellCheck
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          {...testProps('ScrollableTextInput_TextInput')}
        />
      </View>
      <View
        {...testProps('ScrollableTextInput_CloseButton_Wrapper')} style={{marginEnd:20}}>
        {isClearBtnShown && (
            <IconButton iconName="md-close" size={15} color="green" onPress={onPress}/>
        )}
      </View>

    </View>
  )
}
export default ScrollableTextInput
const styles = 
  StyleSheet.create({
    content: {
      flexDirection: 'row',
      borderColor: 'transparent',
      borderWidth: 1,
      alignItems: 'center',
      borderRadius: 30,
      shadowColor: 'grey',
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      backgroundColor: Colors.light.background,
      justifyConten: 'center',
      elevation: 6,
      marginHorizontal:20
    },
    
    flexOne: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInputWrapper: {
      flex: 6,
      justifyContent: 'center',
      paddingVertical: 13
    }
   
    
  })