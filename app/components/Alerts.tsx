import React from "react";


const Alerts : React.FC = () => {

    return(
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="text-[1rem] capitalize"><span className="font-semibold">success!</span> i've received your message. will getback shortly</span> 
        </div>
    );
};


export default Alerts;