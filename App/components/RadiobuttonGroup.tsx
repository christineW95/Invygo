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
      <Label label={label ?? label} style={{ color: "black" }} />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
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
  container: {
    marginVertical: 10,
    backgroundColor:Colors.light.background,

    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    borderColor: "black",
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    marginLeft: 5,
  },
});
