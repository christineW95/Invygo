import { StyleSheet, View, Platform } from "react-native";
import React from "react";
import { ListAccordionProps } from "react-native-paper";
import Label from "./Label";
import { testProps } from "../Utils/utils.helper";
import { RadioButton } from "react-native-paper";
import Colors from "../constants/Colors";

type RadioButtonPropTypes = {
  props?: ListAccordionProps;
  onSelect: Function;
  value: string;
  label: string;
  status: "checked" | "unchecked";
};

const RadioButtonItem = (props: RadioButtonPropTypes) => {
  const { value = "", label, status, onSelect } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.radioBtnWrapper}>
        <RadioButton
          key={Math.random().toFixed(1)}
          {...testProps("RadioButton_Component")}
          value={value}
          status={status}
          color={Colors.light.Primary}
          onPress={() => onSelect(value)}
          {...props}
        />
      </View>
      <Label label={label ?? label} style={{ color: "black" }} />
    </View>
  );
};

export default RadioButtonItem;
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  radioBtnWrapper:
    Platform.OS == "ios"
      ? {
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 30,
          marginHorizontal: 10,
        }
      : {},
});
