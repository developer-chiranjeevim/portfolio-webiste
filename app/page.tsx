import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const page = () => {

  return(
    <>
      <div className="">
        <section id="home">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};



export default page;