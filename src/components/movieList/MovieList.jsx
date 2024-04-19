import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
      <ul className={css.movieList}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link className={css.linkTitle} to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
  );
};

export default MovieList;
