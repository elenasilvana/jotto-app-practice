import React, { Component } from "react";

import { GuessedWord } from "./GuessedWord";
import { Congrats } from "./Congrats";
import { InputComponent } from "./input";
import { connect } from "react-redux";

const AppComponent = (props) => {
  const { success, guessedWords } = props;
  return (
    <div className="container">
      <h1>Jotto App</h1>
      <Congrats success={success} />
      <InputComponent />
      <GuessedWord guessedWords={guessedWords} />
    </div>
  );
};

const mapStateToProps = ({ success, guessedWords }) => {
  return { success, guessedWords };
};

export const App = connect(mapStateToProps)(AppComponent);
