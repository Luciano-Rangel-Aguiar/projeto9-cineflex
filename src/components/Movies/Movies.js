import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function MoviesScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );
    promise.then((response) => {
      const { data } = response;
      setMovies(data);
    });
    promise.catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="Content">
      <h2>Selecione o filme</h2>
      <div className="Movies">
        {movies.map((movie) => {
          const { id, title, posterURL } = movie;
          return (
            <div className="Movie" key={id}>
              <Link to={`/filme/${id}`}>
                <img src={posterURL} alt={title} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
