import React from "react";
import { testProps } from "../../App/Utils/utils.helper";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Label from "./Label";
import Colors from "../constants/Colors";
type CustomTextInputPropTypes = {
  label?: string;
  style?: object;
  placeholder?: string;
};

function CustomTextInput(props: TextInputProps) {
  const { label, placeholder = "Write Here ..." } = props;
  return (
    <View style={styles.container}>
      <Label label={label ?? label} />
      <TextInput
        style={[styles.textInput]}
        placeholderTextColor="grey"
        placeholder={placeholder}
        {...testProps("Textinput_Component")}
        {...props}
      />
    </View>
  );
}

export default CustomTextInput;
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.light.background,
    padding: 20,
    marginTop: 10,
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 }, // change this for more shadow
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  container: {
    margin: 30,
  },
});
