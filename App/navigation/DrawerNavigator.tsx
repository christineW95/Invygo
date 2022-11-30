import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";

import Reports from "../screens/Reports";
import Registeration from "../screens/Registeration";
import Search from "../screens/Search";
import { RootTabParamList } from "../../types";
import { HOME_ROUTES } from "../constants/Routes";
import { useThemeColor } from "../components/Themed";
import Colors from "../constants/Colors";
import { Image } from "react-native";
import Details from "../screens/Details";

const Drawer = createDrawerNavigator<RootTabParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={HOME_ROUTES.Register}
      detachInactiveScreens={true}
      screenOptions={{
        headerRight: () => (
          <Image
            source={require("../../assets/images/logo.jpeg")}
            resizeMode="center"
            style={{
              alignSelf: "flex-end",
              justifyContent: "flex-end",
              width: 90,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: "orange",
        },

        drawerStyle: {
          backgroundColor: useThemeColor(
            { light: Colors.light.background, dark: Colors.dark.background },
            ""
          ),
        },
        drawerActiveBackgroundColor: useThemeColor(
          { light: Colors.light.shadowColor, dark: "grey" },
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
          title:HOME_ROUTES.Graphs,
        }}
      />
    </Drawer.Navigator>
  );
}
