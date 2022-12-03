import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { testProps } from "../Utils/utils.helper";

type IconButtonPropTypes = {
  iconName: string;
  size?: number;
  color?: string;
  onPress: Function;
};

function IconButton({ iconName, size, color, onPress }: IconButtonPropTypes) {
  return (
    <TouchableOpacity onPress={onPress} {...testProps('IconButton_Component')}>
      <Ionicons name={iconName} size={size} color={color} {...testProps('IconButton_Icon')} />
    </TouchableOpacity>
  );
}

export default IconButton;
