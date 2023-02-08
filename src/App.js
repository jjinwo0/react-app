import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import React from "react";
import Movie from "./Movie"

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5?sort_by=year`
      )).json();
      setMovies(json.data.movies);
      setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>
    {loading ? <h1>Loading...</h1> : <div>{movies.map(m => 
      <Movie m={m}/>
    )}</div>}
  </div>;
}

export default App;
