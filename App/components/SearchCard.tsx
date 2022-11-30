import { testProps } from '../Utils/utils.helper'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'





type CardProps = {
  id: number
  contentType: string
  title: string
  duration: string
  iconURL: string
  imageURL: string
  onPress:Function
}
function SearchCard(props: CardProps) {
  

  return (
    <TouchableOpacity
      {...testProps('Search_Card_Wrapper')}
      style={styles.container}
      onPress={props.onPress}
      >
      <View style={styles.left}>
        {/* image */}
        {/* left Side */}
        <Image
          style={styles.cardImage}
          source={
          require('../../assets/images/person.webp')}
          {...testProps('Card_Image')}
        />
        <View style={styles.contentStyle}>
            <Text {...testProps('Card_Type_Text')} style={styles.typeStyle}>title</Text>
            <Text {...testProps('Card_Title_Text')} style={styles.titleStyle}>title</Text>
          
         
        </View>
      </View>
     
    </TouchableOpacity>
  )
}

export default SearchCard
const styles = 
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor:'white',
      borderRadius:   (22),
      paddingVertical:   (20),
      marginVertical:   (8)
    },

    contentStyle: {
      justifyContent: 'space-around',
      flex: 1
    },
    icon: {
      width:   (40),
      height:   (30),
      borderRadius:   (6)
    },
    cardImage: {
      width:   (62),
      height:   (62),
      borderRadius:   (31),
      marginHorizontal:   (12)
    },
    left: {
      flexDirection: 'row',
      flex: 2
    },
    typeStyle: {
      fontWeight: '600',
      color: 'purple'
    },
    titleStyle: {
      fontWeight: '700',
      flexDirection: 'row'
    },
    rightStyle: {
      flex: 1,
      alignItems: 'center',
      bottom:   (10)
    },
  
    
  })