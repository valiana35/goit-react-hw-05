import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovie } from "../service/movieApi";
import BackLink from "../components/backLink/BackLink";
import MovieInfo from "../components/movieInfo/MovieInfo";
import Loader from "../components/loader/Loader";
import "./Pages.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location?.state ?? "/movies");
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      {error && <p>Sorry, something went wrong</p>}
      <BackLink to={goBackLink.current}>Go back</BackLink>
      {movie && <MovieInfo movie={movie} />}
      <h2>Additional information</h2>
      {!isLoading && (
        <div>
          <Link to="cast" className="linkCast">
            Cast
          </Link>
          <Link to="reviews" className="linkReviews">
            Reviews
          </Link>
        </div>
      )}
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;