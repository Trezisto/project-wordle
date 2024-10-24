import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessKeyboard from '../GuessKeyboard';
import Guess from '../Guess';
import GuessResult from '../GuessResult';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
  // const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
  // console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info(JSON.stringify({ answer }));
  const [guessResults, setGuessResults] = React.useState([]);
  return <>
    {/* <GuessList  guessResults={guessResults}></GuessList> */}
    <Guess      guessResults={guessResults} answer={answer}></Guess>
    {
    guessResults.length < NUM_OF_GUESSES_ALLOWED && !guessResults.includes(answer)? 
      <>
        <GuessForm  guessResults={guessResults} setGuessResults={setGuessResults}></GuessForm>
        <GuessKeyboard guessResults={guessResults} answer={answer} setAnswer={setAnswer}></GuessKeyboard>
      </>
      : <GuessResult guessResults={guessResults} setGuessResults={setGuessResults} answer={answer} setAnswer={setAnswer}></GuessResult>
    } 
  </>;
}

export default Game;
