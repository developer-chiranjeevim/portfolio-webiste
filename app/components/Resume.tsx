"use client"

import React, { useState } from "react";
import Title from "./Title";

interface timeLineDatas{
    key: number,
    title: string;
    duration: string;
    location: string;
    description: string;
};


const timeLine = (timeLineDatas: timeLineDatas[]) =>{

    
    return(
        <div className="">
            <ol className="relative border-s border-gray-200 dark:border-gray-700"> 
                {
                    timeLineDatas.map((data) =>  (
                        <li key={data.key} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                            <time className="mb-1 text-[1.25rem] font-normal leading-none text-gray-400 capitalize">{data.duration}</time>
                            <h3 className="text-[1.5rem] font-semibold text-[#fec544] py-[0.5rem] capitalize">{data.title} - {data.location} </h3>
                            <p className="mb-4 text-[1.25rem] font-normal text-gray-500 capitalize">{data.description}</p>
                        </li>
                    ))
                }                 
            </ol>
        </div>
    )
};

const Resume : React.FC = () => {

    const [timeLineDatasExperience, setTimeLineDatasExperience] = useState<timeLineDatas[]>([
        {key: 1, title: "front-end developer intern", duration: "Jan 2023 - July 2023", location: "PSG CAS, Coimbatore", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."},
        {key: 2, title: "full stack developer intern", duration: "June 2024 - Nov 2024", location: "ShamlaTech Solutions, Coimbatore", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."},
    
    ]);

    const [timeLineDatasEductaion, setTimeLineDatasEducation] = useState<timeLineDatas[]>([
        {key: 1, title: "front-end developer intern", duration: "Jan 2023 - July 2023", location: "PSG CAS, Coimbatore", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."},
        {key: 2, title: "full stack developer intern", duration: "June 2024 - Nov 2024", location: "ShamlaTech Solutions, Coimbatore", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis."},
    ]);

    return(
        <div className="bg-[#090a1c] py-[2rem] md:px-[3rem] lg:px-[7rem]">
            <div className="">
                <Title text={"resume"} />
            </div>
            <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1 px-[2rem]">
                    <h1 className="capitalize text-[2.5rem] text-white text-center md:text-start">experience</h1>
                    <div className="my-[2rem]">
                        { timeLine(timeLineDatasExperience) }
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 px-[2rem]">
                    <h1 className="capitalize text-[2.5rem] text-white text-center md:text-start">education</h1>
                    <div className="my-[2rem]">
                        { timeLine(timeLineDatasEductaion) }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Resume;