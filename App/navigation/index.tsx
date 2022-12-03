import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import { RootStackParamList } from "../../types";
import { HOME_ROUTES, STACK_ROUTES } from "../constants/Routes";
import DrawerNavigator from "./DrawerNavigator";
import Details from "../screens/Details";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={STACK_ROUTES.Home}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name={HOME_ROUTES.Details}
        component={Details}
        options={({ navigation, route }) => ({
          title: route?.params?.user?.name || '',
          headerStyle: { backgroundColor: "orange" },
          headerTitleStyle: { color: "#fff", fontSize: 24, fontWeight: "bold" },
        })}
      />
    
    </Stack.Navigator>
  );
}
