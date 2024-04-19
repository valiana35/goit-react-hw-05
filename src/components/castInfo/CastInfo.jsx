import css from "./CastInfo.module.css";

const CastInfo = ({ cast }) => {
  return (
      <ul className={css.castList}>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
                <img src={profile_path && `https://image.tmdb.org/t/p/w200${profile_path} alt=${name} width="200"`} />
                <h2>{name}</h2>
                <p>{character}</p>
            </li>
          );
        })}
      </ul>
  );
};

export default CastInfo;
