"use client"

import React,{ useState } from "react";
import Title from "./Title";
import postDetails from "../api/contact";
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';
import Alerts from "./Alerts";


interface ContactInfoProps {

    iconSvg: string,
    title: string,
    info: string,

};


interface FormInputValues {
    name: string,
    email: string,
    subject: string,
    message: string,
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().min(5, 'Subject Should Be Minimum 5 Characters').required('Subject is Required'),
    message: Yup.string().min(5, 'Message Should Be Minimum 5 Characters').required('Message is Required'),
});

const ContactInfoElement : React.FC<ContactInfoProps> = ({ iconSvg, title, info }) => {


    return(
        <div className="flex items-center mt-[1.5rem]">
            <div className="">
                <img src={`/assets/icons/${iconSvg}.svg`} alt="" className="h-[2.5rem]" />
            </div>
            <div className="ml-4">
                <h1 className="capitalize text-white text-[1.25rem]">{title}</h1>
                <p className={`text-gray-500 ${title != "email address"? "capitalize" : ""}`}>{info}</p>
            </div>
            
        </div>
    );
};



const Contact : React.FC = () => {
    //component states
    const [submitOnLoad, setSubmitOnLoad] = useState<boolean>(true);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);



    const initialValues: FormInputValues= { name: '', email: '', subject: '', message: '' };

    const onSubmit = async(values: FormInputValues) => {
        setSubmitOnLoad(false);
        const response = await postDetails(values.name, values.email, values.subject, values.message);
        if(response){
            setSubmitOnLoad(true);
            setIsSubmitted(true);
        }else{
            setSubmitOnLoad(false);
        };
        
    };

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
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            <Form action="submit" className="">
                                <Field name="name" placeholder="Your Name"   type="text" className="bg-[#121325] text-white p-[1rem] w-full my-[0.5rem] rounded-lg focus:outline-none" />
                                <ErrorMessage name="name" component="p" className="text-red-500 text-[1rem]" />
                                <Field name="email" placeholder="Your Email"   type="email" className="bg-[#121325] text-white p-[1rem] w-full my-[0.5rem] rounded-lg focus:outline-none" />
                                <ErrorMessage name="email" component="p" className="text-red-500 text-[1rem]" />
                                <Field name="subject" placeholder="Your Subject"   type="text" className="bg-[#121325] text-white p-[1rem] w-full my-[0.5rem] rounded-lg focus:outline-none" />
                                <ErrorMessage name="subject" component="p" className="text-red-500 text-[1rem]" />
                                <Field name="message" as="textarea" placeholder="Your Message"  className="bg-[#121325] h-[30vh] text-white p-[1rem] w-full my-[0.5rem] rounded-lg focus:outline-none" />
                                <ErrorMessage name="message" component="p" className="text-red-500 text-[1rem]" />
                                {
                                    isSubmitted?
                                        <Alerts />
                                    :
                                    <></>
                                }
                                
                                <button type="submit" className="capitalize mt-[0.5rem] w-full bg-[#fec544] px-[2.5rem] py-[0.75rem] rounded-lg text-[1.5rem] md:w-fit">
                                    {
                                        submitOnLoad?
                                            "submit"
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-spin">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>  
                                    }
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 px-[2rem]">
                    <div className="">     
                        <h1 className="capitalize text-[2rem] text-white text-center md:text-start">contact info</h1>
                        <p className="text-gray-500 my-[0.5rem] text-[1rem]">Always open to collaborations and discussions around tech, or anything that blends purpose with code. Let's connect!</p>
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