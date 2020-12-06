import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  //render the component
  // console.log(wrapper.debug());
  return wrapper;
};

setup();

describe("render", () => {
  //two context when true doesn show anything
  //success false shows input box and submit button
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});

    test("renders input box", () => {});

    test("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {});

    test("does not render input box", () => {});

    test("does not render submit button", () => {});
  });
});

describe("update state", () => {});
