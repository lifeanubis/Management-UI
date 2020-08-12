import React from "react";

function Show({ selected, hide }) {
  return (
    <div className="show">
      <div>
        <h1> {selected.Title} </h1>
        <img src={selected.Poster} alt="tasveer.." />
      </div>

      <div>
        <h3> {selected.Plot} </h3>
        <h2>{selected.Actors} </h2>
      </div>
      <div>
        <h2>{selected.Awards}</h2>
        <h2>
          {selected.Ratings.map((rating) => (
            <ul key={rating.Value}>
              {rating.Source}-{rating.Value}
            </ul>
          ))}
        </h2>
      </div>
      <div style={{ paddingLeft: "150px" }}>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
}

export default Show;
