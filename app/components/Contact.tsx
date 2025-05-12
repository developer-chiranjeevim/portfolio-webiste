"use client"

import React,{ useState } from "react";
import Title from "./Title";
import axios from "axios";
import dotenv from 'dotenv';


dotenv.config();

interface ContactInfoProps {

    iconSvg: string,
    title: string,
    info: string,

};

const postDetails = async(name: string, email: string, subject: string, message: string) => {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)

    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,{
            email: email,
            name: name,
            subject: subject,
            message: message
        })
        console.log("data posted successfully");

    }catch(error){
        if(error instanceof Error){
            console.log(error.message);
        };
    };
};



const ContactInfoElement : React.FC<ContactInfoProps> = ({ iconSvg, title, info }) => {


    return(
        <div className="flex items-center mt-[1.5rem]">
            <div className="">
                <img src={`/assets/icons/${iconSvg}.svg`} alt="" className="h-[2.5rem]" />
            </div>
            <div className="ml-4">
                <h1 className="capitalize text-white text-[1.25rem]">{title}</h1>
                <p className="text-gray-500 capitalize">{info}</p>
            </div>
            
        </div>
    );
};



const Contact : React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [contactInfo, setContactInfo] = useState<ContactInfoProps[]>([
        {iconSvg: "email", title: "email address", info: "developer.chiranjeevi@gmail.com"},
        {iconSvg: "phone", title: "phone number", info: "+91 9345893138"},
        {iconSvg: "address", title: "address", info: "13/5B I.O.B Colony, irugur, coimbatore, 641-103"},
    ]);


    return(
        <div className="bg-[#0c0d1f] py-[4rem] md:px-[3rem] lg:px-[7rem]">
            <div className="">
                <Title text={"contact"} />
            </div>
            {/* grid main container */}
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 px-[2rem]">
                    <h1 className="capitalize text-[2rem] text-white text-center md:text-start">just say hello</h1>
                    {/* form input container */}
                    <div className="mt-[1rem]">
                        <form action="submit" className="">
                            <input onChange={(e) => setName(e.target.value)} placeholder="Your Name"   type="text" className="bg-[#121325] text-white p-[1rem] w-full mb-[1rem] rounded-lg focus:outline-none" />
                            <input onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"   type="email" className="bg-[#121325] text-white p-[1rem] w-full mb-[1rem] rounded-lg focus:outline-none" />
                            <input onChange={(e) => setSubject(e.target.value)} placeholder="Your Subject"   type="text" className="bg-[#121325] text-white p-[1rem] w-full mb-[1rem] rounded-lg focus:outline-none" />
                            <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"  className="bg-[#121325] h-[30vh] text-white p-[1rem] w-full mb-[1rem] rounded-lg focus:outline-none" />
                        </form>
                        <button onClick={() => postDetails(name, email, subject, message)} className="capitalize w-full bg-[#fec544] px-[2.5rem] py-[0.75rem] rounded-lg text-[1.5rem] md:w-fit">submit</button>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 px-[2rem]">
                    <div className="">     
                        <h1 className="capitalize text-[2rem] text-white text-center md:text-start">contact info</h1>
                        <p className="text-gray-500 my-[0.5rem] text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p>
                    </div>
                    <div className="">
                        {
                            contactInfo.map((data, key) => (
                                <ContactInfoElement key={key} iconSvg={data.iconSvg} title={data.title} info={data.info}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Contact;