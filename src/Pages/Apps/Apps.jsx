import React, { useEffect, useState } from 'react';
import EachApp from './EachApp';

const Apps = () => {
    const [allApps, setAllApps] = useState([]);
    useEffect(() => {
        fetch('/allApps.json').then(res => res.json()).then(data => {
            // console.log(data)
            setAllApps(data)
        }
        )
    }, [])
    return (
        <div className='bg-gray-200 text-center py-4 '>
            <h1 className='font-bold text-4xl pb-3'>Our All Applications</h1>
            <p className='text-gray-600 pb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex  mx-auto   items-center justify-center gap-8 lg:gap-259 '>
                <p className='font-semibold text-lg'>({allApps.length}) Apps Found</p>

                <span><label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label></span>
            </div>
            <div className='mr-15 ml-15 mb-15 mx-auto pt-9 grid lg:grid-cols-4  gap-4'>

                {
                    allApps.length === 0 ? (<h1>App are loading</h1>) :
                        allApps.map(app => <EachApp app={app} key={app.id}></EachApp>)
                }
            </div>
        </div>
    );
};

export default Apps;