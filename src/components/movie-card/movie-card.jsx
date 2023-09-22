import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Card.Title>{movie.title}</Card.Title>
      <Card.Body>
        <Card.Text>{movie.director}</Card.Text>
        <Card.Genre>{movie.genre}</Card.Genre>
        <Card.Description>{movie.description}</Card.Description>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
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
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};