import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchMovie } from "../service/movieApi";
import BackLink from "../components/backLink/BackLink";
import MovieInfo from "../components/movieInfo/MovieInfo";
// import MovieCast from "../components/movieCast/MovieCast";
// import MovieReviews from "../components/movieReviews/MovieReviews";
import Loader from "../components/loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location?.state ?? "/");
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
    </main>
  );
};

export default MovieDetailsPage;

// const {id, title, overview, poster_path, popularity, media_type, release_date} = params
