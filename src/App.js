import React from "react";

import { GuessedWord } from "./GuessedWord";
import { Congrats } from "./Congrats";
import { InputComponent } from "./input";

export const App = (props) => {
  const { success, guessedWords } = props;
  return <div className="container" data-test="component-app"></div>;
};
