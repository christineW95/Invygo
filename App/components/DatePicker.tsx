import RNDateTimePicker from "@react-native-community/datetimepicker";
import { testProps } from "../Utils/utils.helper";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Label from "./Label";
import Colors from "../constants/Colors";
type DatepickerPropTypes = {
  props?: object;
  value?: Date;
  onChange: Function;
  label: string;
};
export const Datepicker = (props: DatepickerPropTypes) => {
  const { label, value, onChange, style } = props;
  const [show, setShow] = useState(false);

  const closePicker = () => {
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Label label={label ?? label} />
      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={"date"}
          is24Hour={true}
          onChange={(event, selectedDate) => {
            onChange(selectedDate);
            closePicker();
          }}
        />
      )}
      <TextInput
        onFocus={showDatepicker}
        value={value?.toLocaleDateString()}
        placeholder="Click to open picker!"
        style={[styles.textInput, style]}
        placeholderTextColor="grey"
        {...testProps("Textinput_Component")}
        {...props}
      />
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
