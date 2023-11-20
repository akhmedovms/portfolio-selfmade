import { FaBarsStaggered } from "react-icons/fa6";
import { Link, animateScroll as scroll } from "react-scroll";
import Darklight from "./Darklight";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <nav id="navbar" className="bg-base-200 ">
      <div className="navbar  align-element">
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
          <div className="drawer z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
                <FaBarsStaggered className="h-6 w-6" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul
                tabIndex={0}
                className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-3"
              >
                <div className="pb-6">
                  <h2 className="text-2xl">Do you like my portfolio : )</h2>
                </div>
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
          <div>
            <Darklight />
          </div>
          {/* CART LINK */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
