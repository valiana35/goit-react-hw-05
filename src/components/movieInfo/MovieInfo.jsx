import css from "./MovieInfo.module.css";

const MovieInfo = ({
  movie: { title, overview, poster_path, popularity, media_type, release_date },
}) => {
  return (
    <div>
      <div className={css.movieImg}>
        <img src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path} alt=${title} width="500"`} />
      </div>
      <div>
        <h2>{title} ({release_date.slice(0, 4)})</h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        <p>{popularity}</p>
        <p>{media_type}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
