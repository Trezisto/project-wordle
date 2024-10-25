import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { STATUSES } from "../../constants";

function Banner({ children, status, setAnswer, setGuessResults, setStatus }) {
  function restartGame() {
    setAnswer(() => sample(WORDS));
    setGuessResults([]);
    setStatus(STATUSES[0]);
  }
  const restartBtn = (
    <button className="restart-button" onClick={() => restartGame()}>
      Restart
    </button>
  );

  return (
    <div className={`banner ${status}`}>
      {children} {restartBtn}
    </div>
  );
}

export default Banner;
