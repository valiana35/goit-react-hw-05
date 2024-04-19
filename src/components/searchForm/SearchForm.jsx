import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(query);
    evt.target.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
        className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <button className={css.btn} type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
