import clsx from "clsx";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

const Navigation = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <ul>
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
    </>
  );
};

export default Navigation;