import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import DrawerNavigator from "../../../App/navigation/DrawerNavigator";

describe("Testing react drawer navigation", () => {
  test("render drawer correct", async () => {
    const component = (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

    render(component);
  });
});
