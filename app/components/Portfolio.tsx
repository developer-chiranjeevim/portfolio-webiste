import React from "react";
import Title from "./Title";

const Portfolio : React.FC = () => {

    return(
        <>
        <div className="bg-[#0c0d1f] px-[2rem] py-[2rem] md:px-[3rem] lg:px-[7rem]">
            <Title text={"portfolio"}/>
            <div className="grid grid-cols-2 gap-[2rem]">
                <div className="col-span-2 xl:col-span-1">
                    <h1 className="capitalize text-white text-[2.5rem]">I'm a</h1>
                    <p className="text-[#fec544] capitalize text-[1.5rem]">AWS certified solutions architect - associate</p>
                    <div className="">
                        <p className="text-[#a9adb8] text-justify text-[1.25rem]">With an AWS Certified Solutions Architect – Associate credential and a strong foundation in designing scalable,
                        secure, and cost-effective cloud solutions, I am well-prepared to contribute to several key technology roles across enterprise environments:</p>
                    </div>
                    <ul className="my-[1rem]">
                        <li className="text-[#a9adb8] text-[1.25rem] mb-[1rem]"><span className="text-[#fec544]">Solution Architect:</span> I design secure, scalable, and cost-effective cloud architectures aligned with business needs.</li>
                        <li className="text-[#a9adb8] text-[1.25rem] mb-[1rem]"><span className="text-[#fec544]">Computer Network Architect:</span> I create and optimize data communication networks with a focus on performance, capacity, and security.</li>
                        <li className="text-[#a9adb8] text-[1.25rem] mb-[1rem]"><span className="text-[#fec544]">Enterprise Architect:</span> I align IT strategies with business goals, ensuring cohesive enterprise architecture and digital transformation.</li>

                    </ul>
                </div>
                <div className="col-span-2 xl:col-span-1 xl:w-full h-full flex justify-center items-center">
                    <img src="/assets/images/aws.jpeg" alt="" className="" />
                </div>
            </div>
        </div>
        </>
    );
};


export default Portfolio;