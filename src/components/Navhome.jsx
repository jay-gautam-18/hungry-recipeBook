import React from 'react'
import {  FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink ,useLocation ,useNavigate} from "react-router-dom";

const Navhome = () => {
    const location = useLocation()
    const navigate = useNavigate()
  return (
    <div className='h-full w-full absolute z-105'>
                <div className=' h-32 w-full flex items-center justify-evenly'>
                    <div className='flex w-1/4 items-center justify-center'>
                    
                    {location.pathname === "/about" && <button onClick={()=> navigate('/')} className='hover:text-red-600 font-semibold tracking-[3px] hover:bg-red-100 hover:bg-opacity-30 border-1 uppercase border-white px-4 py-2 text-white absolute rounded-2xl shadow-2xl shadow-black'>
                        home...
                    </button>}
                    {location.pathname === "/" && <button onClick={()=> navigate('/about')} className='hover:text-red-600 font-semibold tracking-[3px] hover:bg-red-100 hover:bg-opacity-30 border-1 uppercase border-white px-4 py-2 text-white absolute rounded-2xl shadow-2xl shadow-black'>
                        about...
                    </button>}
                    {location.pathname === "/recipes" && <button onClick={()=> navigate('/')} className='hover:text-red-600 font-semibold tracking-[3px] hover:bg-red-100 hover:bg-opacity-30 border-1 uppercase border-white px-4 py-2 text-white absolute rounded-2xl shadow-2xl shadow-black'>
                        home...
                    </button>}
                    
                    {location.pathname === "/favroite" && <button onClick={()=> navigate('/recipes')} className='hover:text-red-600 font-semibold tracking-[3px] hover:bg-red-100 hover:bg-opacity-30 border-1 uppercase border-white px-4 py-2 text-white absolute rounded-2xl shadow-2xl shadow-black'>
                        recipes...
                    </button>}
                    {location.pathname === "/recipes/create-recipe" && <button onClick={()=> navigate('/recipes')} className='hover:text-red-600 font-semibold tracking-[3px] hover:bg-red-100 hover:bg-opacity-30 border-1 uppercase border-white px-4 py-2 text-white absolute rounded-2xl shadow-2xl shadow-black'>
                        recipes...
                    </button>}
                    
                    </div>
                    <div className='flex flex-col w-1/2 items-center justify-center'>
                        <h1 className=' text-white text-5xl font-extrabold shadow-2xl '>廾しれ𝒢<span className='font-[600] italic'>R</span>ン</h1>
                        <div className='p-1'>
                        <h1 className='text-white text-xl italic font-bold'>Recipe B(.)(.)k</h1>
                        </div>
                    </div>
                    {location.pathname === "/recipes" ? <div className='flex w-1/4 items-center justify-center'>
                    <NavLink to='/recipes/create-recipe'>
                    <button className='shadow-2xl shadow-black bg-transparent font-semibold hover:bg-zinc-600 border-1 uppercase border-white tracking-[3px] text-white p-2 rounded-lg'>Create Recipe..</button>
                    </NavLink>
                    </div> :
                    <div className='flex w-1/4 items-center justify-evenly'>
                            <a href='https://www.linkedin.com/in/jay-gautam-7b936b28a' className='font-bold shadow-2xl text-xl hover:bg-red-100 hover:bg-opacity-30  hover:text-red-600 rounded-full shadow-black text-white border-2 border-white p-3'><FaLinkedinIn /></a>
                            <a href='https://x.com/uff_jayyy' className='font-bold shadow-2xl text-xl hover:bg-red-100 hover:bg-opacity-30  hover:text-red-600 rounded-full shadow-black text-white border-2 border-white p-3'><FaXTwitter /></a>
                            <a href='https://github.com/jay-gautam-18' className='font-bold shadow-2xl text-xl hover:bg-red-100 hover:bg-opacity-30  hover:text-red-600 rounded-full shadow-black text-white border-2 border-white p-3'><FaGithub /></a>
                    </div> }
                                          
                </div>
            </div>
  )
}

export default Navhome