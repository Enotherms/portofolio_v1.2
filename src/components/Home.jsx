import React from 'react'
import Typed from 'react-typed';


const Home = () => {
    return (
        <div id='home' className='bg-slate-200 h-96 text-gray-900 dark:bg-slate-600 dark:text-slate-200 sm:h-96 grid grid-flow-row place-content-center px-10'>
            <div className='my-7 mx-10 p-5 font-inter group'>
                <h1 className='text-3xl font-bold pb-3'>Hello, I'm <Typed strings={['Abiyyu Dhiyaul Haq']} startDelay={1200} backDelay={2000} typeSpeed={70} backSpeed={70} loop/></h1>
                <p className='text-xl font-semiboldbold'>student at Universitas Budi Luhur.</p>
                <p className='text-xl font-semiboldbold'>Find out more about me and feel free to connect with me here :</p>
            </div>
        </div>
    )
}

export default Home