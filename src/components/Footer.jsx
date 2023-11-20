import { Link } from "react-router-dom";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral">
      <div className="align-element footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center gap-5 grid-flow-col">
          <Link
            to="/"
            className="hidden lg:flex btn btn-secondary text-3xl items-center"
          >
            MS
          </Link>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to="#" className="animated-icon">
            <FaTelegram size={30} className="text-white" />
          </Link>
          <Link to="#" className="animated-icon">
            <FaInstagram size={30} className="text-white" />
          </Link>
          <Link to="#" className="animated-icon">
            <FaGithub size={30} className="text-white" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
