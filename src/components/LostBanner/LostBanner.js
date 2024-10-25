import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer, setAnswer, setGuessResults, setStatus }) {
  return (
    <Banner
      status="sad"
      setAnswer={setAnswer}
      setGuessResults={setGuessResults}
      setStatus={setStatus}
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
