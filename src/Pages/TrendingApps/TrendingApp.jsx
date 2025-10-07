import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const TrendingApp = ({ app }) => {
    console.log(app);

    return (
        <div className='shadow-sm p-3'>
            <img src="" alt="" />
            <h3>{app.title}</h3>

            <span className='flex justify-between'><p className='text-green-400 w-[60px] h-[26px] rounded-md bg-gray-200 flex gap-1 justify-center items-center p-'><FaArrowDown />
                {app.downloads}</p>
                <p className='text-[#ff8811] w-[60px] h-[26px] rounded-md bg-[#fff0e1] flex gap-1 justify-center items-center p-' ><FaStar />
                    {app.ratingAvg
                    }</p></span>
        </div>
    );
};

export default TrendingApp;