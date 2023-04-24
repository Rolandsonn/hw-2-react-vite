import { NavLink } from "react-router-dom";
const activeLink = ({ isActive }) => (isActive ? "activeLink" : "");
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={activeLink}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={activeLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/posts"} className={activeLink}>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
