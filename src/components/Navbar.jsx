import { FaBarsStaggered } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import Darklight from "./Darklight";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <nav id="navbar" className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <a
            href="#navbar"
            onClick={scrollToTop}
            smooth={true}
            offset={-70}
            duration={500}
            className="hidden lg:flex btn btn-secondary text-3xl items-center"
          >
            MS
          </a>
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
                <Link to="About" smooth={true} offset={-70} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="footer" smooth={true} offset={-70} duration={500}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="Projects" smooth={true} offset={-70} duration={500}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-[15px] gap-3">
            <li>
              <Link to="About" smooth={true} offset={-70} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="footer" smooth={true} offset={-70} duration={500}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="Projects" smooth={true} offset={-130} duration={500}>
                Projects
              </Link>
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
