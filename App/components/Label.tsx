import React from "react";
import { testProps } from "../../App/Utils/utils.helper";
import { Text, TextProps } from "react-native";
type LabelPropsTypes = {
  props?: TextProps;
  label: string;
};

function Label(props: LabelPropsTypes) {
  const { label } = props;
  return (
    <Text {...testProps("Text_Component")} {...props}>
      {label ?? label}
    </Text>
  );
}

export default Label;
