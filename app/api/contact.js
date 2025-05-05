import axios from "axios";


const postDetails = async(name, email, subject, message) => {

    try{
        const response = await axios.post(`${process.env.BASE_URL}/contact`,{
            email: email,
            name: name,
            subject: subject,
            message: message
        })
        console.log("data posted successfully");

    }catch(error){
        console.log(error.message);
    };
};




export default postDetails;