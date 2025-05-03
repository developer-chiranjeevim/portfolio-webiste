import React from "react";


interface props{
    text: string;
}

const Title : React.FC<props> = ({text}) => {



    return(
        <div className="w-full flex justify-center">
            <div className="relative mb-[2rem]">
                <h1 className="hidden md:block uppercase text-[7rem] text-[#a9adb8] opacity-5 font-semibold">{text}</h1>
                <div className="absolute top-0 w-full h-full flex justify-center items-center">
                    <p className="uppercase text-[#fec544] text-[2rem]">{text}</p>
                </div>
            </div>
        </div>
    );
};



export default Title;