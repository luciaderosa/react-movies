import Card from "react-bootstrap/Card";
import './MovieCardBS.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



function MovieCardBS({ movie }) {
  const posterURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    
    <Link to= {`/movie/${movie.id}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset">
      <Card border="dark" className="h-100 movie-card-link">
        <Card.Header className="flex-grow-1">{movie.title}</Card.Header>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title className="mb-2">
            Release: {movie.release_date}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-secondary">
            Vote average: {movie.vote_average}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCardBS;
