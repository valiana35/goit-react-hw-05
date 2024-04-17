import { useEffect, useState } from "react";
import { getTrending } from "../service/movieApi";
import MovieList from "../components/movieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getTrending();
        setMovies(data);
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
      <h1>Trending today</h1>
      <MovieList movies={movies}/>
      {isLoading && <p>Loading...</p>}
      {error && <p>Sorry, something went wrong</p>}
    </main>
  );
};

export default HomePage;
