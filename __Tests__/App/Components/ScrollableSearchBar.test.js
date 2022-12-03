import ScrollableTextInput from "../../../App/components/ScrollableSearchBar";
import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import IconButton from "../../../App/components/IconButton";

describe("render ScrollableTextInput successfully", () => {
  test("renders correctly", () => {
    const props = {
      value: "test",
      onChangeText: jest.fn(),
      placeholder: "test",
    };
    const { queryByTestId } = render(
      <ScrollableTextInput placeholder={"Search"} {...props} />
    );
    const ScrollableTextInput_ScrollView = queryByTestId(
      "ScrollableTextInput_ScrollView"
    );
    expect(ScrollableTextInput_ScrollView).toBeTruthy();
    const ScrollableTextInput_textInputWrapper = queryByTestId(
      "ScrollableTextInput_textInputWrapper"
    );
    expect(ScrollableTextInput_textInputWrapper).toBeTruthy();

    const ScrollableTextInput_TextInput = queryByTestId(
      "ScrollableTextInput_TextInput"
    );
    expect(ScrollableTextInput_TextInput).toBeTruthy();
    fireEvent.changeText(ScrollableTextInput_TextInput, "hi");
    expect(props.onChangeText).toHaveBeenCalledWith("hi");

    const ScrollableTextInput_CloseButton_Wrapper = queryByTestId(
      "ScrollableTextInput_CloseButton_Wrapper"
    );
    expect(ScrollableTextInput_CloseButton_Wrapper).toBeTruthy();

    const btn = queryByTestId("IconButton_Component");
    fireEvent.press(btn);
    expect(props.onChangeText).toHaveBeenCalledWith(null);
  });
});
