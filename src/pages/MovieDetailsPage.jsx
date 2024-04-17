import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrending } from "../service/movieApi";
import MovieCast from "../components/movieCast/MovieCast";
import MovieReviews from "../components/movieReviews/MovieReviews";

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const movieId = useParams();
    console.log(movieId);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const data = await getTrending();
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
      <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Sorry, something went wrong</p>}
      {movie && <MovieCast />}
      {movie && <MovieReviews />}
      </div>
    )
}

export default MovieDetailsPage;


// const {id, title, overview, poster_path, popularity, media_type, release_date} = params