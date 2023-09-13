import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://movie-place-35ed6ca44a78.herokuapp.com")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.docs.map((doc) => {
                    return {
                        director: doc.director_name?.[0],
                        title: doc.title,
                        description: doc.description,
                        genre: doc.genre
                    };

                });

                setMovies(moviesFromApi);
            });
    }, []);


    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} />;
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            <button
                onClick={() => {
                    alert("Nice!");
                }}
            >
                Click me!
            </button>
            {movie.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </div>
    );
}