import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "../../Redux/Actions/UserActions";
import { Card } from "semantic-ui-react";
import { ListGroup } from "react-bootstrap";
import { getMovieUser } from "../../Redux/Actions/MovieActions";

const Profil = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer.user);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getMovieUser(user._id));
  },[user._id,dispatch])

  const movieUser = useSelector((state) => state.MovieReducer.movieUser) || []; // Provide a default empty array

  return (
    <div>
      <h1>{user.name}</h1>

      {movieUser.length > 0 ? ( // Check if there are movies
        movieUser.map((el, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>{el.title}</ListGroup.Item>
              <ListGroup.Item>{el.genre}</ListGroup.Item>
              <ListGroup.Item>{el.description}</ListGroup.Item>
              {el.reviews.map((review, reviewIndex) => (
                <ListGroup.Item key={reviewIndex}>{review}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        ))
      ) : (
        <p>No movies found for this user.</p> // Handle case when no movies exist
      )}
    </div>
  );
};

export default Profil;
