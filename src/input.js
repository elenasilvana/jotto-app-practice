import React from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

const Input = (props) => {
  const { success } = props;

  const [currentGuess, setcurrentGuess] = React.useState(null);

  const submitGuessedWord = (e) => {
    e.preventDefault();
    const guessedWord = currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      guessWord(guessedWord);
      setcurrentGuess({ currentGuess: "" });
    }
  };

  return (
    <div data-test="component-input">
      {!success && (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            onClick={(e) => submitGuessedWord(e)}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export const InputComponent = connect(mapStateToProps)(Input);
