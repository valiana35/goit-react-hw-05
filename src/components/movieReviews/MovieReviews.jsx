import { useEffect, useState } from "react";
import { getMovieReviews } from "../../service/movieApi";
import Loader from "../loader/Loader";
import { useParams } from "react-router-dom";
import ReviewsInfo from "../reviewsInfo/ReviewsInfo";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Sorry, something went wrong</p>}
      {reviews.length > 0 ? (
        <ReviewsInfo reviews={reviews} />
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;
