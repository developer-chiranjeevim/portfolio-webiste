import React from "react";
import Title from "./Title";


const About : React.FC = () =>{


    return(
        <div className="bg-[#0c0d1f] py-[2rem] md:px-[3rem] lg:px-[7rem]">
            <div className="flex flex-col items-center">
                <Title text={"about"}/>
                <div className="grid grid-cols-2 h-full h-[60rem]">
                    <div className="col-span-2 px-[2rem] md:px-0 md:col-span-1">
                        <img src="/assets/images/profile.jpeg" alt="" className="h-[30rem] md:h-[50rem] w-full" />
                    </div>
                    <div className="col-span-2 md:col-span-1 px-[2rem] flex flex-col justify-center">
                        <div className="w-fit">
                            <h1 className="capitalize text-white text-[2.5rem]">hi there i'm chiranjeevi</h1>
                            <p className="text-[#fec544] capitalize text-[1.25rem]">AWS certified solutions architect</p>
                            <div className="my-[2rem]">
                                <p className="text-[#a9adb8] text-justify text-[1.25rem]">I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.</p>
                            </div>
                            <div className="my-[2rem]">
                                <ul className="text-[#a9adb8] text-[1.25rem]">
                                    <li className="capitalize mb-[0.5rem]">Birthday : May 07, 1990</li>
                                    <li className="capitalize mb-[0.5rem]">phone : +1 876-369-9009</li>
                                    <li className="capitalize mb-[0.5rem]">Birthday : May 07, 1990</li>
                                    <li className="capitalize mb-[0.5rem]">Email : devis@example.com</li>
                                    <li className="capitalize mb-[0.5rem]">From : 2661 Hich meadow lane bear creek</li>
                                    <li className="capitalize mb-[0.5rem]">Language : English, Germanic</li>
                                </ul>
                            </div>
                            <div className="my-[5rem]">
                                <button className="capitalize text-black bg-[#fec544] text-[1.5rem] font-thin px-[1rem] py-[0.5rem] rounded-full">download CV</button>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default About;