import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import { Input } from "./input";

const setup = () => shallow(<Input />);

describe("Input component", () => {
  it("should render Input component without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  });
});
