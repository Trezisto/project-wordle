import React from 'react';

function GuessForm({guessResults, setGuessResults}) {
  const [guess, setGuess] = React.useState('');
  return <form className="guess-input-wrapper" onSubmit={onSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" 
      pattern="^[a-zA-Z]{5}$" title="Please match the format."
      value={guess}
      onChange={(event) => setGuess(event.target.value.toUpperCase())} />
  </form>;

  function onSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(guess));

    const nextGuessResults = [...guessResults, guess];
    // console.log(`NEXT-GUESS: ${nextGuessResults.join(', ')}`)
    setGuessResults(nextGuessResults);
    setGuess('');
  }
}

export default GuessForm;
