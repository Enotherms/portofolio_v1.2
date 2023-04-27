    import React from 'react';

    const Contact = () => {
    return (
        <div id='contact' className='px-6'>
            <h2 className='text-center mb-3 text-3xl font-semibold text-gray-900 dark:bg-slate-600 dark:text-slate-200'>Contact</h2>
            <div className='flex justify-center'>
                <div className='w-1/2 border-b-4 rounded-lg border-b-sky-400 dark:border-b-gray-900'></div>
            </div>
            <p className='mx-7 mt-3 mb-8 text-center text-xl font-semiboldbold'>Stay in touch</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 m-2 p-4 bg-white rounded-md dark:bg-gray-900 shadow-lg overflow-hidden' style={{ opacity: 1, transform: 'none' }}>
                    <div className='flex items-center justify-center py-4 rounded-md bg-slate-200 shadow-lg overflow-hidden'>
                    <img className='w-16' src={process.env.PUBLIC_URL + '/img/logo/gmail.png'} alt='gmail Icon' />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center text-gray-900 '>
                        <p className='text-2xl font-semibold mb-1 dark:text-slate-200'>Mail</p>
                        <a target='_blank' className='bg-gray-900 dark:bg-slate-200 shadow-lg rounded text-white dark:text-gray-900 p-1 font-semibold ' href='mailto:sayabiyyu@gmail.com'>sayabiyyu@gmail.com</a>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 m-2 p-4 bg-white rounded-md dark:bg-gray-900 shadow-lg overflow-hidden' style={{ opacity: 1, transform: 'none' }}>
                    <div className='flex items-center justify-center py-4 rounded-md bg-slate-200 shadow-lg overflow-hidden'>
                    <img className='w-16' src={process.env.PUBLIC_URL + '/img/logo/github.png'} alt='github Icon' />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center text-gray-900 '>
                        <p className='text-2xl font-semibold mb-1 dark:text-slate-200'>Github</p>
                        <a target='_blank' className='bg-gray-900 dark:bg-slate-200 shadow-lg rounded text-white dark:text-gray-900 p-1 font-semibold' href='https://github.com/Enotherms'>Enotherms</a>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 m-2 p-4 bg-white rounded-md dark:bg-gray-900 shadow-lg overflow-hidden' style={{ opacity: 1, transform: 'none' }}>
                    <div className='flex items-center justify-center py-4 rounded-md bg-slate-200 shadow-lg overflow-hidden'>
                    <img className='w-16' src={process.env.PUBLIC_URL + '/img/logo/linkedin.png'} alt='linkedin Icon' />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center text-gray-900 '>
                        <p className='text-2xl font-semibold mb-1 dark:text-slate-200'>Linkedin</p>
                        <a target='_blank' className='bg-gray-900 dark:bg-slate-200 shadow-lg rounded text-white dark:text-gray-900 p-1 font-semibold' href='https://www.linkedin.com/in/abiyyu-dhiyaul-haq-333575268/'>Abiyyu Dhiyaul Haq</a>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 m-2 p-4 bg-white rounded-md dark:bg-gray-900 shadow-lg overflow-hidden' style={{ opacity: 1, transform: 'none' }}>
                    <div className='flex items-center justify-center py-4 rounded-md bg-slate-200 shadow-lg overflow-hidden'>
                    <img className='w-16' src={process.env.PUBLIC_URL + '/img/logo/instagram.png'} alt='instagram Icon' />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center text-gray-900 '>
                        <p className='text-2xl font-semibold mb-1 dark:text-slate-200'>Instagram</p>
                        <a target='_blank' className='bg-gray-900 dark:bg-slate-200 shadow-lg rounded text-white dark:text-gray-900 p-1 font-semibold' href='https://www.instagram.com/_biyyu/'>_biyyu</a>
                    </div>
                </div>
            </div>
        </div>
    );
    }

    export default Contact;
