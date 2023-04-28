// import movies from "../Data/movies.json";
// import { MovieCard } from "./MovieCard";
import "./MoviesGrid.css";
import MovieCardBS from "./MovieCardBS";
import {get} from '../utils/httpCliente.js'
import {useState, useEffect} from 'react'

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className="moviesGrid">
      {movies.map((movie) => (
        <MovieCardBS key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
