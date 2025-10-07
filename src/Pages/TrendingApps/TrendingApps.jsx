import React, { useEffect, useState } from 'react';
import TrendingApp from './TrendingApp';

const TrendingApps = () => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        fetch('trendingApss.json').then(res => res.json()).then(data => {
            //  console.log(data)
            setApps(data)
        }
        )
    }, [])
    return (
        <div className='w-max-[1200px] mx-auto text-center'>
            <div>
                <h1 className='font-bold text-4xl'>Trending Apps</h1>
                <p className='text-gray-600 mt-2'>Explore All Trending Apps on the Market developed by us</p></div>
            <div className='mt-5 grid lg:grid-cols-4  gap-4'>
                {apps.length === 0 ? (<h1>Loading</h1>) :
                    apps.map(app => <TrendingApp app={app} key={app.id}></TrendingApp>)}
            </div>

        </div>
    );
};

export default TrendingApps;