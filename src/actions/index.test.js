import { correctGuess, actionTypes } from "./index";

describe("CorrectGuess", () => {
  test("returns an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    //toBe is use for inmutable object
    //toEqual comparing the content deep equal
  });
});
