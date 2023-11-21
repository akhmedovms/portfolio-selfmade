import React from "react";
import Skills from "../components/Skills";
import About from "../components/About";
import List from "../components/List";
function Home() {
  return (
    <>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <List />
      </div>
    </>
  );
}

export default Home;
