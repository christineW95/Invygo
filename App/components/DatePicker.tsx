import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Label from "./Label";
import Colors from "../constants/Colors";
import IconButton from "./IconButton";
type DatepickerPropTypes = {
  props?: object;
  value?: any;
  onChange: Function;
  label: string;
};
export const Datepicker = (props: DatepickerPropTypes) => {
  const { label, value, onChange } = props;
  const [show, setShow] = useState(false);

  const closePicker = () => {
    setShow(false);
  };

  const showDatepicker = () => {
  if(Platform.OS=='android')
    setShow(true);
  };
  return (
    <View style={styles.container}>
      <Label label={label ?? label} />
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={new Date(value) }
          mode={"date"}
          is24Hour={true}
          onChange={(event, selectedDate) => {
            onChange(selectedDate);
            closePicker();
          }}
        />
      )}
    
      <TouchableOpacity style={[styles.textInput,{flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}]} onPress={showDatepicker}>
        <Text>Click to pick!</Text>
        {Platform.OS == 'android' ? <IconButton iconName="md-calendar" size={24}/> :
        <RNDateTimePicker
        style={{flex:1}}
        testID="dateTimePicker"
        value={new Date(value) }
        mode={"date"}
        is24Hour={true}
        onChange={(event, selectedDate) => {
          onChange(selectedDate);
          closePicker();
        }}
      />}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.light.background,
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  container: {
    margin: 30,
  },
});
