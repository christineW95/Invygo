import { StyleSheet, View } from "react-native";
import React from "react";
import Label from "./Label";

import RadioButtonItem from "./RadioButton";
import Colors from "../constants/Colors";

type RadioButtonGroupPropTypes = {
  props?: object;
  label?: string;
  listItems: Array<any>;
};

const RadioButtonGroup = (props: RadioButtonGroupPropTypes) => {
  const { label, listItems } = props;
  const RenderContent = (): any =>
    listItems.map((item) => <RadioButtonItem {...item} />);

  return (
    <View style={styles.wrapper}>
      <Label label={label ?? label} style={styles.label} />
      <View style={styles.container}>
        <View style={styles.content}>
          <RenderContent />
        </View>
      </View>
    </View>
  );
};

export default RadioButtonGroup;
const styles = StyleSheet.create({
  icon: { tintColor: "purple" },
  wrapper: {
    margin: 30,
  },
  label:{ color: "black" },
  container: {
    marginVertical: 10,
    backgroundColor: Colors.light.background,

    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    borderColor: "black",
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
  },
  content:{ flexDirection: "row", justifyContent: "space-evenly" },
});
