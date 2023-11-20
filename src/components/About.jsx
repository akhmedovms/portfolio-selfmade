import React from "react";

function About() {
  return (
    <div
      id="About"
      className=" h-screen flex justify-center text-start md:text-center flex-col gap-5 mt-36 md:mt-0"
    >
      <h1 className="text-5xl tracking-wide">Hi! I Am Muhammad Sadiy : )</h1>
      <p className="text-center tracking-wide">
        I am a frontend developer specializing in creating engaging and
        user-friendly web experiences. With expertise in HTML, CSS, and
        JavaScript, I bring designs to life and ensure seamless functionality.
        Proficient in React and experienced with technologies like Tailwind CSS,
        Bootstrap, Redux, and DaisyUI, I create beautiful and responsive
        interfaces. Detail-oriented and innovative, I thrive in fast-paced
        environments, constantly expanding my skills to deliver outstanding user
        experiences.
      </p>
      <div className="scroll-style flex flex-col mt-48 items-center">
        <span className="text-4xl animate-bounce">⌵</span>
        <span className="text-3xl animate-bounce">⌵</span>
        <span className="text-2xl animate-pulse">Scroll down</span>
      </div>
    </div>
  );
}

export default About;
