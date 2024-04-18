import { useEffect, useState } from "react";
import { getTrending } from "../service/movieApi";
import MovieList from "../components/movieList/MovieList";
import Loader from "../components/loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getTrending();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <p>Sorry, something went wrong</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      </div>
    </main>
  );
};

export default HomePage;
