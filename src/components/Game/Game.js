import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessKeyboard from "../GuessKeyboard";
import Guess from "../Guess";
import GuessList from "../GuessList/GuessList";
import { STATUSES } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState(STATUSES[0]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info(JSON.stringify({ answer }));
  const [guessResults, setGuessResults] = React.useState([]);
  return (
    <>
      {/* <GuessList  guessResults={guessResults}></GuessList> */}
      <Guess guessResults={guessResults} answer={answer}></Guess>
      {status === STATUSES[0] && (
        <>
          <GuessForm
            guessResults={guessResults}
            setGuessResults={setGuessResults}
            answer={answer}
            status={status}
            setStatus={setStatus}
          ></GuessForm>
          <GuessKeyboard
            guessResults={guessResults}
            answer={answer}
            setAnswer={setAnswer}
          ></GuessKeyboard>
        </>
      )}
      {status === STATUSES[1] && (
        <WonBanner
          attempts={guessResults.length}
          setAnswer={setAnswer}
          setGuessResults={setGuessResults}
          setStatus={setStatus}
        ></WonBanner>
      )}
      {status === STATUSES[2] && (
        <LostBanner
          answer={answer}
          setAnswer={setAnswer}
          setGuessResults={setGuessResults}
          setStatus={setStatus}
        ></LostBanner>
      )}
    </>
  );
}

export default Game;
