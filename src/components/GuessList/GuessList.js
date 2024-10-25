import React from "react";

function GuessList({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guessItem) => (
        <p key={crypto.randomUUID()} className="guess">
          {guessItem}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
