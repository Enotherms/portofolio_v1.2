import React from 'react'

export const Skill = () => {
    return (
        <div id='skill' className='text-gray-900 pb-16 pt-10 mb-60'>
            <h2 className='text-center mb-3 text-3xl font-semibold text-gray-900 dark:bg-slate-600 dark:text-slate-200'>What I Can Do ?</h2>
            <div className='flex justify-center'>
                <div className='w-1/2 border-b-4 rounded-lg border-b-sky-400 dark:border-b-gray-900'></div>
            </div>
            <p className='mx-7 mt-3 mb-8 text-center text-xl font-semiboldbold text-gray-900 dark:bg-slate-600 dark:text-slate-200'>Some kills that I have acquired from my experience</p>
            <div className='container mx-auto px-6 font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly '>
                <div className='rounded-md shadow-lg overflow-hidden mb-10 bg-white dark:bg-gray-900 sm:mb-0 sm:w-64 md:w-80 lg:w-72'>
                    <img className='w-full' src={process.env.PUBLIC_URL + '/img/logo/javascript.png'} alt='javascript Icon' />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-gray-900 dark:text-slate-200'>JavaScript</div>
                        <p className='text-sm text-slate-600 dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum.</p>
                    </div>
                </div>
                <div className='rounded-md shadow-lg overflow-hidden mb-10 bg-white dark:bg-gray-900 sm:mb-0 sm:w-64 md:w-80 lg:w-72'>
                    <img className='w-full' src={process.env.PUBLIC_URL + '/img/logo/tailwindcss.png'} alt='tailwindcss Icon' />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-gray-900 dark:text-slate-200'>Tailwind</div>
                        <p className='text-sm text-slate-600 dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum.</p>
                    </div>
                </div>
                <div className='rounded-md shadow-lg overflow-hidden mb-10 bg-white dark:bg-gray-900 sm:mb-0 sm:w-64 md:w-80 lg:w-72'>
                    <img className='w-full' src={process.env.PUBLIC_URL + '/img/logo/java.png'} alt='javascript Icon' />
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-gray-900 dark:text-slate-200'>Java</div>
                        <p className='text-sm text-slate-600 dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, rerum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;