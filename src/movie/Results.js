import React from "react";
import Resulty from "./Resulty";

function Results({ results, show }) {
  return (
    <div className="results">
      {results.map((result) => (
        <Resulty key={result.imdbID} result={result} show={show} />
      ))}
    </div>
  );
}

export default Results;
