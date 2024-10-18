import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { deleteMovie } from "../../Redux/Actions/MovieActions";

const MovieCard = ({ el }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{el.genre}</Card.Subtitle>
                    <Card.Text>{el.description}</Card.Text>

                    {/* Display the rating */}
                    <Card.Text>
                        <strong>Rating:</strong> {el.rating ? el.rating : 'Not rated'}
                    </Card.Text>

                    {/* Display reviews */}
                    <Card.Text>
                        <strong>Reviews:</strong>
                        {el.reviews && el.reviews.length > 0 ? (
                            <ul>
                                {el.reviews.map((reviewObj, index) => (
                                    <li key={reviewObj._id}>
                                        <p><strong>{reviewObj.user}:</strong> {reviewObj.review}</p>
                                        <p><strong>Rating:</strong> {reviewObj.rating}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </Card.Text>

                    <Button onClick={() => dispatch(deleteMovie(el._id))} variant="danger">Delete</Button>
                    <Button variant="info" as={Link} to={`/editMovie/${el._id}`}>Edit</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;
