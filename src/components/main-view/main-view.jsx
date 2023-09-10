import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            Title: 'Goodfellas',
            Description: 'Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York',
            Genre: 'Crime',
            Director: 'Martin Scorsese'
        },
        {

            Title: 'The Irishman',
            Description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer',
            Genre: 'Crime',
            Director: 'Martin Scorsese'
        },
        {

            Title: 'Snatch',
            Description: 'A number of criminals consisting of arms-dealer, thieves and gangsters attempt to get hold of an elegant diamond which is stolen',
            Genre: 'Crime',
            Director: 'Guy Ritchie'
        },

        {
            Title: 'Transformers',
            Description: 'Transformers is a series of science fiction action films based on the Transformers franchise of the 1980s. Michael Bay directed the first five films: Transformers, Revenge of the Fallen, Dark of the Moon, Age of Extinction, and The Last Knight, and has served as a producer for subsequent films',
            Genre: 'Action',
            Director: 'Michael Bay'
        },
        {

            Title: 'The Transporter',
            Description: 'An ex-soldier turned mercenary transporter moves goods, human or otherwise, from one place to another. Complications arise when a job goes astray and he has to save the life of his female cargo',
            Genre: 'Action',
            Director: 'Corey Yuen'
        }



    ]);

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