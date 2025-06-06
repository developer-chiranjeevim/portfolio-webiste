"use client"


import React,{ useState } from "react";




const Navbar : React.FC = () => {

    const [isNavbarActive, setNavbarActive] = useState(true);

    const scrollToSection = (id: string) => {
        setNavbarActive(false);

        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <>
            <div className="relative">
                <div className="fixed top-0 z-20 w-full bg-[#0c0d1f] border-b-[1px] border-[#a9adb8] py-2 px-[1rem] md:px-[5rem] flex items-center justify-between">
                    {/* navbar logo container */}
                    <div className="select-none">
                        <h1 className="capitalize text-white text-[2.5rem]"><span className="text-[#fec544]">c</span>j</h1>
                    </div>

                    {/* navbar menu container */}
                    <div className="hidden md:block">
                        <ul className="text-white inline-flex items-center select-none">
                            <li onClick={() => scrollToSection("home")} className="uppercase mr-[1.5rem] cursor-pointer hover:text-[#fec544] duration-600">home</li>
                            <li onClick={() => scrollToSection("about")} className="uppercase mr-[1.5rem] cursor-pointer hover:text-[#fec544] duration-600">about</li>
                            <li onClick={() => scrollToSection("resume")} className="uppercase mr-[1.5rem] cursor-pointer hover:text-[#fec544] duration-600">resume</li>
                            <li onClick={() => scrollToSection("portfolio")} className="uppercase mr-[1.5rem] cursor-pointer hover:text-[#fec544] duration-600">portfolio</li>
                            <li onClick={() => scrollToSection("contact")} className="uppercase mr-[1.5rem] cursor-pointer hover:text-[#fec544] duration-600">contact</li>
                        </ul>
                    </div>

                    {/* navbar toggler icon */}
                    <div className="block md:hidden" onClick={() => setNavbarActive(!isNavbarActive)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-[#a9adb8]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
                <div className={`fixed z-10 ${isNavbarActive?"duration-600 top-18" : "-top-140 duration-600"} w-full bg-[#212529] h-[20rem] px-[1rem] md:hidden`}>
                    <ul className="text-[#a9adb8] text-[1.2rem] select-none">
                        <li onClick={() => scrollToSection("home")} className="uppercase mt-[1.5rem] hover:text-[#fec544] duration-600">home</li>
                        <li onClick={() => scrollToSection("about")} className="uppercase mt-[1.5rem] hover:text-[#fec544] duration-600">about</li>
                        <li onClick={() => scrollToSection("resume")} className="uppercase mt-[1.5rem] hover:text-[#fec544] duration-600">resume</li>
                        <li onClick={() => scrollToSection("portfolio")} className="uppercase mt-[1.5rem] hover:text-[#fec544] duration-600">portfolio</li>
                        <li onClick={() => scrollToSection("contact")} className="uppercase mt-[1.5rem] hover:text-[#fec544] duration-600">contact</li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-[4.75rem]">

            </div>
        </>
    );
};


export default Navbar;