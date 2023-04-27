import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    useEffect(() => {
        const checkbox = document.querySelector('#toggle')
        const html = document.querySelector('html')

    const handleCheckboxClick = () => {
        checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
    }

    checkbox.addEventListener('click', handleCheckboxClick)

    return () => {
        checkbox.removeEventListener('click', handleCheckboxClick)
    }
}, [])

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div id className='uppercase  text-gray-900 flex justify-between items-center w-full bg-white dark:text-gray-200 dark:bg-gray-900 overflow-hidden h-16 mx-auto px-6 rounded-b-xl'>
            <div className='flex items-center p-4'>
                <span className='mr-2 font-semibold'>Light</span>
                    <input type='checkbox' id='toggle' className='hidden' />
                    <label for='toggle'>
                        <div className='w-9 h-5 bg-slate-300 rounded-full flex items-center p-1 cursor-pointer'>
                            <div className='w-4 h-4 bg-slate-50 rounded-full toggle-circle'></div>
                        </div>
                    </label>
                <span className='ml-2 font-semibold'>Dark</span>
            </div>
            <ul className=' hidden md:flex font-semibold'>
                <a href="#" className='p-4 hover:text-gray-900 hover:bg-gray-300 hover:rounded'>Home</a>
                <a href="#contact" className='p-4 hover:text-gray-900 hover:bg-gray-300 hover:rounded'>Contact</a>
                <a href="#skill" className='p-4 hover:text-gray-900 hover:bg-gray-300 hover:rounded'>About</a>
        
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] dark:text-gray-200 dark:bg-gray-900 rounded-r-xl shadow bg-white  h-full ease-in-out duration-500' : 'fixed Right-0 top-0 w-[60%] dark:text-gray-200 dark:bg-gray-900 rounded-r-xl shadow bg-white h-full ease-in-out duration-500 left-[-100%]'}>
                <ul className='p-4 uppercase flex flex-col'>
                    <a href="#" className='p-4 border-gray-600 border-b hover:text-gray-900 hover:bg-gray-300 hover:rounded'>Home</a>
                    <a href="#contact" className='p-4 border-gray-600 border-b hover:text-gray-900 hover:bg-gray-300 hover:rounded'>Contact</a>
                    <a href="#skill" className='p-4 border-gray-600 border-b hover:text-gray-900 hover:bg-gray-300 hover:rounded'>About</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar