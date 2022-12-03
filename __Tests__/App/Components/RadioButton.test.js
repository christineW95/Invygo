import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import RadioButtonItem from "../../../App/components/RadioButton";

describe("render Radio Button successfully", () => {
  const props = {
    label: "LABEL",
    onSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const onPress = jest.fn();
    const { queryByTestId } = render(
      <RadioButtonItem onPress={onPress} {...props} />
    );
    const component = queryByTestId("RadioButton_Component");
    expect(component).toBeTruthy();
    fireEvent.press(component);
    expect(onPress).toHaveBeenCalled();

    expect(component.props.label).toEqual("LABEL");
  });
});
