import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import * as React from "react";

import Reports from "../screens/Reports";
import Registeration from "../screens/Registeration";
import Search from "../screens/Search";
import { RootTabParamList } from "../types";
import { HOME_ROUTES } from "../constants/Routes";
import { useThemeColor } from "../components/Themed";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator<RootTabParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
    
      initialRouteName={HOME_ROUTES.Register}
      detachInactiveScreens={true}
      screenOptions={{
        drawerStyle: {
          backgroundColor: useThemeColor(
            { light: Colors.light.Primary, dark: Colors.dark.Primary },
            ""
          ),
        },
        drawerActiveBackgroundColor: useThemeColor(
          { light: Colors.light.shadowColor, dark: Colors.dark.shadowColor },
          ""
        ),
        drawerActiveTintColor: useThemeColor(
          {
            light: Colors.light.tabIconSelected,
            dark: Colors.dark.tabIconSelected,
          },
          ""
        ),
        drawerInactiveTintColor: useThemeColor(
          {
            light: Colors.light.tabIconDefault,
            dark: Colors.dark.tabIconDefault,
          },
          ""
        ),
      }}
    >
      <Drawer.Screen
      
        name={HOME_ROUTES.Register}
        component={Registeration}
        options={() => ({
          title: HOME_ROUTES.Register,
        })}
      />
      <Drawer.Screen
        name={HOME_ROUTES.Search}
        component={Search}
        options={{
          title: HOME_ROUTES.Search,
        }}
      />

      <Drawer.Screen
        name={HOME_ROUTES.Graphs}
        component={Reports}
        options={{
          title: HOME_ROUTES.Graphs,
        }}
      />
    </Drawer.Navigator>
  );
}
