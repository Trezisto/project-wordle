import { sample } from 'new-component/src/utils';
import React from 'react';
import { WORDS } from '../../data';

function GuessResult({guessResults, setGuessResults, answer, setAnswer}) {
  function restartGame() {
    setAnswer(() => sample(WORDS));
    setGuessResults([]);
  }
  const restartBtn = <button className="restart-button"
    onClick={() => restartGame()}>
    Restart
  </button>

  const isSuccess = guessResults.includes(answer);
  if (isSuccess) {
    const attempts = guessResults.length;
    return <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {attempts} guess{attempts>1?'es':''}</strong>.
      </p> {restartBtn}
    </div>;
  } else {
    return <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      {restartBtn}
    </div>;
  }
}

export default GuessResult;
