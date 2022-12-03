import Colors from '../constants/Colors';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { testProps } from '../Utils/utils.helper';

interface DetailsCardProps {
    label:string
    value:string
}

const DetailsCard = ({label,value}: DetailsCardProps) => {
  return (
    <View
    style={styles.container}
  >
    <Text style={styles.title} {...testProps('Title_Component')}>
      {label}
    </Text>

    <Text {...testProps('Nationality_Component')}>{value}</Text>
  </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    padding: 20,
    marginTop: 10,
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 }, // change this for more shadow
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  title:{fontSize:20,fontWeight:'bold'},

});
