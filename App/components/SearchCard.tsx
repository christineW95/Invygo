import { testProps } from '../Utils/utils.helper'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'





type CardProps = {
  name: string
  nationality: string
  onPress:Function
}
function SearchCard({name,onPress,nationality}: CardProps) {
  

  return (
    <TouchableOpacity
      {...testProps('Search_Card_Wrapper')}
      style={styles.container}
      onPress={onPress}
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
            <Text {...testProps('Card_Type_Text')} style={styles.typeStyle}>{name}</Text>
            <Text {...testProps('Card_Title_Text')} style={styles.titleStyle}>{nationality}</Text>
          
         
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
      fontSize:24,
      color: 'purple'
    },
    titleStyle: {
      fontWeight: '700',
    },
   
  
    
  })