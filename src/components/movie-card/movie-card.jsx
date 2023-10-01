import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";



export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Title>{movie.title}</Card.Title>
      <Card.Body>
        <Card.Text>{movie.director}</Card.Text>
        <Card.Genre>{movie.genre}</Card.Genre>
        <Card.Description>{movie.description}</Card.Description>
        <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string,
  }).isRequired
};