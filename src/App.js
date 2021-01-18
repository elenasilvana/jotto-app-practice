import React from "react";
import hookActions from "./actions/hookActions";

import { Input } from "./input";

function reducer(state, action) {
  switch (action.type) {
    case "SET_SECRET_WORD":
      return {
        ...state,
        secretWord: action.payload,
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export const App = (props) => {
  const { success, guessedWords } = props;

  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) => {
    dispatch({
      type: "SET_SECRET_WORD",
      payload: secretWord,
    });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <>
      {state.secretWord ? (
        <div className="container" data-test="component-app">
          <Input secretWord={state.secretWord} />
        </div>
      ) : (
        <div className="container" data-test="spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p>Loading secret word</p>
        </div>
      )}
    </>
  );
};
