import "./Movie.css";

import React, { useState } from "react";
import Axios from "axios";
import Results from "./Results";
import Search from "./Search";
import Show from "./Show";

const api = {
  key: "354402dc",
  coin: "14a42deb73158dc174f1bfd3d958e247",
  baseUrl: " https://www.omdbapi.com/?apikey=354402dc",
};

function MovieMain() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      Axios(` ${api.baseUrl} &s=${state.s}`).then(({ data }) => {
        let results = data.Search;
        console.log(data);
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const show = (id) => {
    Axios(`${api.baseUrl} &i=${id}`).then(({ data }) => {
      let result = data;
      console.log(result);
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const hide = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div>
      <div
        style={{
          padding: "10px",
          background: "teal",
          width: "100%",
          height: "100%",
        }}
      >
        <Search handleInput={handleInput} search={search} />
      </div>

      <Results results={state.results} show={show} />

      {typeof state.selected.Title != "undefined" ? (
        <Show selected={state.selected} hide={hide} />
      ) : (
        false
      )}
    </div>
  );
}

export default MovieMain;
