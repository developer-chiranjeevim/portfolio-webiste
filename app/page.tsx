import React from "react";
import Banner from "./components/Banner";
import About from "./components/About";
import Resume from "./components/Resume";


const page = () => {


  return(
    <>
      <h2 className="">
        <Banner />
        <About />
        <Resume />
      </h2>
    </>
  );
};



export default page;