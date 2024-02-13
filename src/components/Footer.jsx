import { Link } from "react-router-dom";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };
  return (
    <footer id="footer" className="bg-neutral">
      <div className="align-element footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center gap-5 grid-flow-col">
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
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to="https://t.me/Frontenddev05" className="animated-icon">
            <FaTelegram size={30} className="text-white" />
          </Link>
          <Link
            to="https://www.instagram.com/akhmedov_0205"
            className="animated-icon"
          >
            <FaInstagram size={30} className="text-white" />
          </Link>
          <Link to="https://github.com/akhmedovms" className="animated-icon">
            <FaGithub size={30} className="text-white" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
