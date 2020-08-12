import React from "react";

function Resulty({ result, show }) {
  return (
    <div>
      <div onClick={() => show(result.imdbID)}>
        <div className="resulty">
          <img src={result.Poster} alt="tasveer.." />
        </div>

        <h1> {result.Title} </h1>
      </div>
    </div>
  );
}

export default Resulty;
