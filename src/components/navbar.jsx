import React from 'react'
import profile from '../assets/samir.png'
import menu from '../assets/menu.png'

const Navbar = () => {
    return (
        <div className='flex  w-full h-16 bg-gradient-to-br from-slate-600 to-slate-800 p-4  shadow-lg items-center'>
            <div className='flex items-center space-x-2 pl-[4vw] '>
                <img src={profile} alt="Profile" className='w-12 h-12 rounded-full' />

                <h1 className='text-white font-bold text-2xl font-serif'>Samir Tiwari</h1>
            </div>
            {/* for desktopview */}
            <ul className='md:flex  ml-auto hidden '>

                <li className='hover:underline  font-mono text-2xl hover:bg-slate-800 px-4 py-2 text-stone-950 text-shadow-stone-950 '><a href="#home">home</a></li>
                <li className='hover:underline  font-mono text-2xl hover:bg-slate-800 px-4 py-2 text-stone-950 text-shadow-stone-950 '><a href="#about">about</a></li>
                <li className='hover:underline  font-mono text-2xl hover:bg-slate-800 px-4 py-2  text-stone-950 text-shadow-stone-950'><a href="#skills">skills</a></li>
                <li className='hover:underline  font-mono text-2xl hover:bg-slate-800 px-4 py-2 text-stone-950 text-shadow-stone-950 '><a href="#projects">projects</a></li>
                <li className='hover:underline  font-mono text-2xl hover:bg-slate-800 px-4 py-2 text-stone-950 text-shadow-stone-950 '><a href="#contact">contact</a></li>
            </ul>

            {/* for mobile view */}
            <div className='md:hidden ml-auto'>
                <button className='hover:underline  font-mono text-2xl hover:bg-slate-800 px-4 py-2 '>
                    <img src={menu} alt="Menu" className='w-8 h-8' />
                </button>
            </div>
        </div>
    )
}

export default Navbar   
