import React from "react";
import {  TouchableOpacity} from "react-native";

import { Ionicons } from "@expo/vector-icons";
type IconButtonPropTypes = {
    iconName: string;
    size?: number;
    color?: string;
    onPress:Function
  };
  
function IconButton({iconName,size,color,onPress}:IconButtonPropTypes) {
  return (
<TouchableOpacity onPress={onPress}>
    <Ionicons name={iconName} size={size} color={color} />
</TouchableOpacity>
  );
}

export default IconButton;

