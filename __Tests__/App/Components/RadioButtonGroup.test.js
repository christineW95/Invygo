import React from "react";
import {  render } from "@testing-library/react-native";

import RadioButtonGroup from "../../../App/components/RadiobuttonGroup";

describe("render Radio Button successfully", () => {
  
  it("renders correctly", () => {
    const props = {
      label: "LABEL",
      listItems:[{
        value:'test',
        label:'r1'
      }]
    }
    const { queryByText} = render(
      <RadioButtonGroup  {...props} />
    );
    const component = queryByText("LABEL");
    expect(component).toBeTruthy();

    const rdBtn = queryByText("r1");
    expect(rdBtn).toBeTruthy();
  });
  it("renders correctly", () => {
    const props = {
      label: "LABEL",
      listItems:[{
        value:'test',
        label:'r1'
      },
      {
        value:'test1',
        label:'r1'
      }
      ]
    }
    const { queryAllByText} = render(
      <RadioButtonGroup  {...props} />
    );
  
    const rdBtn = queryAllByText("r1");
    expect(rdBtn).toBeTruthy();
    expect(rdBtn).toHaveLength(2);
  });
});
