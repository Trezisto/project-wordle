import React from "react";
import { NUM_OF_GUESSES_ALLOWED, STATUSES } from "../../constants";

function GuessForm({
  guessResults,
  setGuessResults,
  answer,
  status,
  setStatus,
}) {
  const [guess, setGuess] = React.useState("");
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={status !== STATUSES[0]}
        pattern="^[a-zA-Z]{5}$"
        title="Please match the format."
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );

  function onSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(guess));

    const nextGuessResults = [...guessResults, guess];
    // console.log(`NEXT-GUESS: ${nextGuessResults.join(', ')}`)
    if (guess === answer) {
      setStatus(STATUSES[1]);
    } else {
      if (nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) {
        setStatus(STATUSES[2]);
      }
    }
    setGuessResults(nextGuessResults);
    setGuess("");
  }
}

export default GuessForm;
