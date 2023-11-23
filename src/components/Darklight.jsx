import React, { useState } from "react";

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

function Darklight() {
  const [selectedTheme, setSelectedTheme] = useState(
    getThemeFromLocalStorage()
  );

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="dropdown dropdown-end ml-auto">
      <label tabIndex={0} className="btn m-1">
        <div className="flex items-center gap-2">
          <span>Theme</span>
          <svg
            width="12px"
            height="12px"
            className="h-2 w-2 fill-current opacity-60 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 "
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            onChange={() => handleThemeChange("light")}
            checked={selectedTheme === "light"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
            onChange={() => handleThemeChange("dark")}
            checked={selectedTheme === "dark"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cmyk"
            value="cmyk"
            onChange={() => handleThemeChange("cmyk")}
            checked={selectedTheme === "cmyk"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            onChange={() => handleThemeChange("cyberpunk")}
            checked={selectedTheme === "cyberpunk"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Synthwave"
            value="synthwave"
            onChange={() => handleThemeChange("synthwave")}
            checked={selectedTheme === "synthwave"}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Business"
            value="business"
            onChange={() => handleThemeChange("business")}
            checked={selectedTheme === "business"}
          />
        </li>
      </ul>
    </div>
  );
}

export default Darklight;
