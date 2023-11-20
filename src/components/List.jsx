import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { links } from "../Links";
import { Link } from "react-router-dom";

function List() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setShowScrollUp(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div id="Projects" className="flex justify-center" data-aos="fade-up">
        <h1 className="text-5xl font-semibold tracking-wide border-b-4 pb-4 inline">
          Projects
        </h1>
      </div>
      <ul className="mt-14">
        {links &&
          links.map((link, index) => {
            return (
              <li
                data-aos="fade-up"
                key={link.id}
                className={`bg-base-100 flex border-t-2 flex-col rounded-md md:rounded-none md:flex-row md:shadow-none items-center p-0 md:p-5 mb-40 gap-0 md:gap-10 shadow-2xl ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <figure>
                  <img
                    src={link.image}
                    alt="image"
                    className="object-cover h-full sm:h-auto rounded-md border-2 "
                    width={3000}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title tracking-wider text-3xl pb-2">
                    {link.name}
                  </h2>
                  <p className="pb-2">{link.desc}</p>
                  <div
                    className={`card-actions ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <Link
                      to={link.github}
                      className="btn btn-outline hover:bg-black hover:text-white hover:px-5 transition-all"
                    >
                      Github
                    </Link>
                    <Link
                      to={link.netlify}
                      className="btn btn-primary hover:px-5 transition-all"
                    >
                      Netlify
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      {showScrollUp && (
        <button
          className="fixed bottom-5 right-5 bg-primary text-white px-4 py-2 rounded-full shadow-md"
          onClick={handleScrollUp}
        >
          Scroll Up
        </button>
      )}
    </>
  );
}

export default List;
