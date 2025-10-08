import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const AppDetails = () => {
    const { id } = useParams()
    const appId = parseInt(id)
    const appData = useLoaderData()
    const singleApp = appData.find(app => app.id === appId)
    const [install, setInstall] = useState(false);

    const handleClickInstall = () => {
        setInstall(true);
    };


    return (
        <div className='bg-gray-200 w-max-[1200px] mx-auto'>
            <div className='pt-9 p-5 lg:pl-33 lg:flex lg:gap-20 lg:my-4'>
                <span className=''><img src={singleApp.image} className='rounded-2xl' alt="" />
                </span>

                <span >
                    <h1 className='font-bold text-xl'>{singleApp.title}</h1>
                    <p><span className='text-gray-500'>Developed by</span> <span className='text-[#9368eb]'>{singleApp.companyName}</span></p>

                    <div className="divider"></div>

                    <div className='flex gap-6 p-3 items-center'>
                        <div>
                            <MdOutlineFileDownload className='text-[#29a871] text-4xl' />
                            <p className='text-gray-500'>Downloads</p>
                            <p className='font-extrabold text-2xl'>{singleApp.downloads}</p>
                        </div>

                        <div>
                            <FaStar
                                className='text-[#ff8811] text-4xl' />
                            <p className='text-gray-500'>Average Ratings</p>
                            <p className='font-extrabold text-2xl'>{singleApp.ratingAvg
                            }</p>
                        </div>

                        <div>
                            <FaRegThumbsUp
                                className='text-[#733be7] text-4xl' />
                            <p className='text-gray-500'>Total Reviews</p>
                            <p className='font-extrabold text-2xl'>{singleApp.reviews}</p>
                        </div>
                    </div>
                    <div><button onClick={() => handleClickInstall()} className="btn mt-5 bg-[#00d390] text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> {install === true ? "Installed" : `Install Now (${singleApp.size} MB)`}</button></div>
                </span>
            </div>
            <div className="divider w-max-[1200px]"></div>

            <div><h1>rating grap</h1>

            </div>

            <div className="divider w-max-[1200px]"></div>

            <div className='pt-9 p-5 lg:pl-33'><p className='font-bold text-2xl mb-5 '>Description</p>
                <p className='text-gray-500  mb-15'>
                    {singleApp.description}</p></div>
        </div>
    );
};

export default AppDetails;
