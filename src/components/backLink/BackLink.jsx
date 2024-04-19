import { Link } from "react-router-dom";
import css from "./BackLink.module.css";

const BackLink = ({ to, children }) => {
  return <Link className={css.back} to={to}>{children}</Link>;
};

export default BackLink;
