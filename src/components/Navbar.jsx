import React, {useEffect } from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
    useEffect(() => {
            const checkbox = document.querySelector('#toggle')
            const html = document.querySelector('html')

            const handleCheckboxClick = () => {
                checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark')
            }
            checkbox.addEventListener('click', handleCheckboxClick)

            return () => checkbox.removeEventListener('click', handleCheckboxClick)
        }, [])

    return (
        <div id className='bg-slate-200 dark:text-gray-200 dark:bg-slate-600 overflow-hidden h-16 uppercase text-gray-900 bg-primary-100 top-0 px-[30px] flex items-start justify-between max-w-full mx-auto z-100 xl:items-center rounded-b-md'>
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
            <ul className='items-center p-4 font-semibold'>
                <Link to="contact" spy={true} smooth={true} duration={400} className="cursor-pointer p-4 hover:text-gray-900 hover:bg-gray-300 hover:rounded">Contact</Link>
                <Link to="skill" spy={true} smooth={true} duration={400} className="cursor-pointer p-4 hover:text-gray-900 hover:bg-gray-300 hover:rounded">About</Link>
            </ul>
    </div>

    )
}

export default Navbar