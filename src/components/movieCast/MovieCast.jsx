import { useEffect, useState } from "react";
import { getMovieCredits } from "../../service/movieApi";
import Loader from "../loader/Loader";
import { useParams } from "react-router-dom";
import CastInfo from "../castInfo/CastInfo";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
        console.log(data.cast);
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
      {cast.length > 0 && <CastInfo cast={cast} />}
    </div>
  );
};

export default MovieCast;
