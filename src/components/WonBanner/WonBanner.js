import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ attempts, setAnswer, setGuessResults, setStatus }) {
  return (
    <Banner
      status="happy"
      setAnswer={setAnswer}
      setGuessResults={setGuessResults}
      setStatus={setStatus}
    >
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {attempts} guess{attempts > 1 ? "es" : ""}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
