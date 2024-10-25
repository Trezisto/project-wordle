import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers.js";

function Guess({ guessResults, answer }) {
  return range(NUM_OF_GUESSES_ALLOWED).map((i) => {
    const guessTryWord = guessResults?.[i] ?? "";
    const lettersStatus = checkGuess(guessTryWord, answer);
    // console.log('guessTryWord: ' + guessTryWord);
    // console.log('answer: ' + answer);
    // console.log('lettersStatus: ' + JSON.stringify(lettersStatus));
    return (
      <p key={Math.random()} className="guess">
        {range(5).map((j) => {
          const letterCssStatus = lettersStatus?.[j]?.status;
          // console.log('letterCssStatus: ' + letterCssStatus);
          return (
            <span key={Math.random()} className={`cell ${letterCssStatus}`}>
              {guessTryWord?.[j]}
            </span>
          );
        })}
      </p>
    );
  });
}

export default Guess;
