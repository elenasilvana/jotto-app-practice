import React, { Component } from "react";

import { GuessedWord } from "./GuessedWord";
import { Congrats } from "./Congrats";
import { InputComponent } from "./input";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto App</h1>
        <Congrats success={true} />
        <InputComponent />
        <GuessedWord guessedWords={[]} />
      </div>
    );
  }
}

export default App;
