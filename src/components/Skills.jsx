import { useEffect } from "react";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoReact,
} from "react-icons/io5";
import { SiTailwindcss, SiBootstrap, SiRedux } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function Languages() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pb-40 flex justify-center items-center flex-col mt-40 md:mt-20">
      <div className="pb-12 flex gap-5" data-aos="fade-up">
        <h1 className="text-5xl font-semibold tracking-wide border-b-4 pb-3 flex gap-3">
          Skills
          <p className="text-5xl text-blue-400 ">
            : <span className="text-5xl text-yellow-400">)</span>
          </p>
        </h1>
      </div>
      <div
        className="flex flex-wrap justify-center gap-10 items-center"
        data-aos="fade-up"
      >
        <span className="html-p text-6xl" title="HTML">
          <IoLogoHtml5 className="icon" />
        </span>
        <span className="css-p text-6xl" title="CSS">
          <IoLogoCss3 className="icon" />
        </span>
        <span className="js-p text-6xl" title="JavaScript">
          <IoLogoJavascript className="icon" />
        </span>
        <span className="react-p text-6xl" title="React">
          <IoLogoReact className="icon" />
        </span>
        <span className="tailwind-p text-6xl" title="Tailwind CSS">
          <SiTailwindcss className="icon" />
        </span>
        <span className="bt-p text-6xl" title="Bootstrap">
          <SiBootstrap className="icon" />
        </span>
        <span className="redux-p text-6xl" title="Redux">
          <SiRedux className="icon" />
        </span>
      </div>
    </div>
  );
}

export default Languages;
