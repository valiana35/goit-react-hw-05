import { useEffect, useState } from "react";
import { getMovie } from "../service/movieApi.js";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/movieList/MovieList";
import Loader from "../components/loader/Loader";
import SearchForm from "../components/searchForm/SearchForm";
import "./Pages.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get("query");
  console.log(movieQuery);

  useEffect(() => {
    if (!movieQuery) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovie(movieQuery);
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieQuery]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div className="formSearch">
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <p>Sorry, something went wrong</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
