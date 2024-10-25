import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessKeyboard({ guessResults, answer }) {
  const statusPriorities = ["incorrect", "misplaced", "correct"];
  const keyButtons = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  // checkGuess(), but Set variant for all guessed words. Used for marking keyboard
  const effectStatusArr = guessResults
    .map((guessElem) => checkGuess(guessElem, answer))
    .flatMap((el) => el)
    .reduce((accumulator, currentValue) => {
      if (!accumulator.map((obj) => obj.letter).includes(currentValue.letter)) {
        accumulator.push(currentValue);
      } else {
        const element = accumulator.find(
          (el) => el.letter === currentValue.letter
        );
        if (
          statusPriorities.indexOf(currentValue.status) >
          statusPriorities.indexOf(element.status)
        ) {
          element.status = currentValue.status;
        }
      }
      return accumulator;
    }, []);
  //console.log(JSON.stringify(effectStatusArr))
  return keyButtons.map((rowArr, index) => (
    <div key={`row${index}`} className="row">
      {rowArr.map((keyElem) => {
        const keyElemStatus = effectStatusArr.find(
          (effStatusElem) => effStatusElem.letter === keyElem
        );
        const effectStatus = keyElemStatus?.status ?? "";
        return (
          <div
            key={keyElem}
            className={`keyButton ${effectStatus}`}
            onClick={(event) => console.log(event.target.value)}
          >
            {keyElem}
          </div>
        );
      })}
    </div>
  ));
}

export default GuessKeyboard;
