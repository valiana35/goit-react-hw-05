import { useEffect, useState } from "react";
import { getMovie } from "../service/movieApi";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/movieList/MovieList";
import Loader from "../components/loader/Loader";
import SearchForm from "../components/searchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get("query");

  useEffect(() => {
    if (!movie) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovie(movie);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movie]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <p>Sorry, something went wrong</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
