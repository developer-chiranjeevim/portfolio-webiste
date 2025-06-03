"use client";

import React from "react";
import dynamic from "next/dynamic";



const WaterWave = dynamic(() => import('react-water-wave'), { ssr: false });

const BannerText = () => {

  return(
    <div className="text-center my-[4rem] mx-[0.5rem]">
      <h1 className="text-white text-[2rem] md:text-5xl">Hi, I am <span className="text-[#fec544]">Chiranjeevi</span></h1>
      <p className="text-[#a9adb8] mt-[1.5rem] text-[1rem] md:text-[1.5rem]">I’m a master's student at PSG College of Arts and Science pursuing an MSc in Software Systems</p>
      <p className="text-[#a9adb8] text-[1rem] md:text-[1.5rem] "> I’m also an AWS Certified Solutions Architect – Associate</p>
    </div>
  );
};



const Banner = () => {
  return (
    <div className="">
      <WaterWave
        imageUrl={"/assets/images/banner.jpg"}
        >
        {methods=> (
        /* children components */
        <div className="md:h-[calc(100vh-4.75rem)] flex items-center justify-center">
          <BannerText />
        </div>
        )}
    </WaterWave>
    </div>
  );
};

export default Banner;
