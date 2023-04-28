import { useState, useEffect } from "react";
import { get } from "../utils/httpCliente";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [moviedetail, setMoviedetail] = useState(null);
  const imgURL = `https://image.tmdb.org/t/p/w300`;

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMoviedetail(data);
    });
  }, [movieId]);

  if (!moviedetail) {
    return null;
  }

  return (
    <Container className="text-center mt-3">
      <Card className="card border-dark mb-3" style={{ width: "90%" }}>
        <div className="row g-0">
          <CardHeader>
            <h2>{moviedetail.title}</h2>
            <h4>{moviedetail.tagline}</h4>
          </CardHeader>

          <div className="col-md-4">
            <Card.Img variant="bottom" src={imgURL + moviedetail.poster_path} />

            {moviedetail.homepage !== "" ? (
              <Link
                to={moviedetail.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Footer>Go to Movie Site</Card.Footer>
              </Link>
            ) : null}
          </div>

          <div className="col-md-8">
            <Card.Body>
              <Card.Text className="my-3 text-start">
              <span className="fw-bold">Genres:</span>{" "}
                {moviedetail.genres.map((genre) => genre.name).join(" - ")}
              </Card.Text>

              {moviedetail.belongs_to_collection !== null ? (
                <Card.Text className="my-3 text-start">
                  <span className="fw-bold">Collection:</span>{" "}
                  {moviedetail.belongs_to_collection.name}
                </Card.Text>
              ) : null}

              <ListGroup
                variant="horizontal"
                className="justify-content-center my-4"
              >
                <ListGroup.Item variant="primary">
                  Popularity {moviedetail.popularity}
                </ListGroup.Item>
                <ListGroup.Item variant="danger">
                  Vote average {moviedetail.vote_average}
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  Vote count {moviedetail.vote_count}
                </ListGroup.Item>
              </ListGroup>

              <Card.Text className="border border-primary rounded-1 my-4 p-3 text-start">
                <span className="fw-bold">Overview:</span>{" "}
                {moviedetail.overview}{" "}
                <span className="fw-bold">
                  Runtime: {moviedetail.runtime} min.
                </span>
              </Card.Text>
              <Container className="text-center">
                <div className="row justify-content-around">
                  <div className="col-md-6">
                    <ListGroup className="justify-content-center">
                      <ListGroup.Item variant="primary">
                        Budget : $
                        {new Intl.NumberFormat("en-US").format(
                          moviedetail.budget
                        )}
                      </ListGroup.Item>
                      <ListGroup.Item variant="success">
                        Revenue: $
                        {new Intl.NumberFormat("en-US").format(
                          moviedetail.revenue
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="col-md-6">
                    <ListGroup className="justify-content-center">
                      <ListGroup.Item variant="primary">
                        Release date : {moviedetail.release_date}
                      </ListGroup.Item>
                      <ListGroup.Item variant="success">
                        Original language: {moviedetail.original_language}
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </Container>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Container>
  );
};

/* BS Card React Component
Card
CardBody
CardFooter
CardHeader
CardImg
CardImgOverlay
CardLink
CardSubtitle
CardText
CardTitle
CardGroup

Movie Detail
      
        <h6>{moviedetail.id}</h6>
        <h6>{moviedetail.adult}</h6>
        <h6>{moviedetail.backdrop_path}</h6>
        <h6>{moviedetail.belongs_to_collection}</h6>
        <h6>{moviedetail.budget}</h6>
        <h6>{moviedetail.genres}</h6>
        <h6>{moviedetail.homepage}</h6>
        <h6>{moviedetail.imdb_id}</h6>
        {moviedetail.original_language}</h6>
        {moviedetail.original_title}</h6>
        <h6>{moviedetail.overview}</h6>
        <h6>{moviedetail.popularity}</h6>
        <h6>{moviedetail.poster_path}</h6>
        <h6>{moviedetail.production_companies}</h6> 
        <h6>{moviedetail.production_countries}</h6> 
        <h6>{moviedetail.release_date}</h6>
        <h6>{moviedetail.revenue}</h6>
        <h6>{moviedetail.runtime}</h6>
        <h6>{moviedetail.spoken_languages}</h6> 
        <h6>{moviedetail.status}</h6>
        {moviedetail.tagline}</h6>
        {moviedetail.title}
        <h6>{moviedetail.video}</h6>
        <h6>{moviedetail.vote_average}</h6>
        <h6>{moviedetail.vote_count}</h6>
      
      */
