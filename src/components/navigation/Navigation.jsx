import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css.listNav}>
            <li>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={buildLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;