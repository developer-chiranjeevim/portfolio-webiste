import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const page = () => {


  return(
    <>
      <div className="">
        <Banner />
        <About />
        <Resume />
        <Contact />
      </div>
    </>
  );
};



export default page;