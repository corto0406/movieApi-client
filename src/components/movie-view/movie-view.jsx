import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./book-view.scss";

export const MovieView = ({ movie }) => {
    const { movieTitle } = useParams();

    const movie = movies.find((m) => movies.title === movieTitle);

    return (
        <div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.description}</span>
            </div>
            <Link to={`/`}>
                <button className="back-button">Back</button>
            </Link>
        </div>
    );
};