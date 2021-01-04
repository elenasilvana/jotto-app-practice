import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../test/testUtils";
import { Input } from "./input";
import { assertPropTypes } from "check-prop-types";

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

describe("Input component", () => {
  it("should render Input component without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  });
  it("should receive secretWord as prop, and it should be string", () => {
    checkProps(Input, { secretWord: "party" });
  });
});
