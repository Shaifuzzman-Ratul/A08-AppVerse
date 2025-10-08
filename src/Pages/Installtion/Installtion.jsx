import React, { useEffect, useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { getStoredBook, removeFromStoredBook } from '../../Utility/addToDB';
import { useLoaderData } from 'react-router';
// import { useParams } from 'react-router';
const Installtion = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setsort] = useState("");

    const data = useLoaderData();
    console.log("Loaded Data:", data);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));

        const myRealList = data.filter(book =>
            convertedStoredBooks.includes(book.id)
        );

        setReadList(myRealList);
    }, [data]);
    console.log(readList);
    const handleUninstall = (appId) => {
        // Remove app ID from local storage
        let storedApps = getStoredBook(); // returns array of IDs
        removeFromStoredBook(appId); // Remove from localStorage

        const updatedApps = storedApps.filter(id => parseInt(id) !== appId);

        // Save updated list back to local storage
        localStorage.setItem('installedBooks', JSON.stringify(updatedApps));

        // Update state so UI updates instantly
        setReadList(prev => prev.filter(app => app.id !== appId));
    };

    return (
        <div className='bg-gray-200  py-4'>
            <div className='text-center'> <h1 className='font-bold text-4xl pb-3'>Your Installed Apps</h1>
                <p className='text-gray-600 pb-10'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex  mx-auto   items-center justify-center gap-8 lg:gap-259 '>
                <p className='font-semibold text-lg'>({readList.length}) Apps Found</p>

                <span>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By <MdArrowDropDown className='text-2xl' />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Rating</a></li>
                            <li><a>Size</a></li>
                        </ul>
                    </div></span>
            </div>

            {readList.map(each => <div className='bg-white rounded-xl lg:w-[1280px] mx-auto m-8 flex justify-between p-5 items-center'>
                <div className='flex gap-6 justify-center items-center '>

                    <div className='w-[85px]'>   <img src={each.image} alt="" className='rounded-xl ' /></div>
                    <div><h1>{each.title}</h1>


                        <span className='flex gap-4 mt-2'><p className='text-green-400 w-[65px] h-[29px] rounded-md bg-gray-100 flex gap-1 justify-center items-center p-'><FaArrowDown />
                            {each.downloads}</p>
                            <p className='text-[#ff8811] w-[60px] h-[26px] rounded-md bg-[#fff0e1] flex gap-1 justify-center items-center p-' ><FaStar />
                                {each.ratingAvg

                                }</p></span>
                    </div>
                </div>

                <div>
                    <button onClick={() => handleUninstall(each.id)} className="btn mt-5 bg-[#00d390] text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> Uninstall</button>
                </div>
            </div>)}


            {/* <div className='bg-white rounded-xl lg:w-[1280px] mx-auto m-8 flex justify-between p-5 items-center'>
                <div className='flex'>

                    <div>   <img src={readList.image} alt="" /></div>
                    <div><h1>titlt</h1>


                        <span className='flex '><p className='text-green-400 w-[65px] h-[29px] rounded-md bg-gray-100 flex gap-1 justify-center items-center p-'><FaArrowDown />
                            9M</p>
                            <p className='text-[#ff8811] w-[60px] h-[26px] rounded-md bg-[#fff0e1] flex gap-1 justify-center items-center p-' ><FaStar />
                                {readList.size
                                }</p></span>
                    </div>
                </div>

                <div>
                    <button className="btn mt-5 bg-[#00d390] text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> Uninstall</button>
                </div>
            </div> */}
        </div>
    );
};

export default Installtion;



