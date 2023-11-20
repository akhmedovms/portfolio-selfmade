import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Darklight from "./Darklight";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start ">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-secondary text-3xl items-center"
          >
            MS
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal text-[15px] gap-3">
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="pl-10 ml-auto">
          {/* THEME SETUP */}
          <Darklight />
          {/* CART LINK */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
