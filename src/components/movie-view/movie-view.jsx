import Col from "react-bootstrap/Col";
import "./book-view.scss";

export const MovieView = ({ movie }) => {
    return (
        <Row className="justify-content-md-center">
            <div>
                <div>
                    <span>Director: </span>
                    <span>{movie.director}</span>
                </div>
                <div>
                    <span>Title: </span>
                    <span>{movie.title}</span>
                </div>
                <div>
                    <span>Description: </span>
                    <span>{movie.description}</span>
                </div>
                <div>
                    <span>Genre: </span>
                    <span>{movie.genre}</span>
                </div>
                <Col md={8} style={{ border: "1px solid black" }}>
                    <BookView
                        style={{ border: "1px solid green" }}
                        book={selectedBook}
                        onBackClick={() => setSelectedBook(null)}
                    />
                </Col>
            </div>
        </Row>

    );
};