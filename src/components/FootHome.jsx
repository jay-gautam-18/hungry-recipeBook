import React from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
const FootHome = () => {
  const location = useLocation()
  return (
    <div className='flex justify-evenly h-1/2 w-full absolute top-100 z-109'>
                {location.pathname === "/" && <div className='h-full w-1/3  flex items-start pt-16 pl-12 justify-start'>
                <NavLink to='/recipes'>
                <button className='shadow-2xl shadow-black bg-transparent hover:bg-zinc-600 border-1 uppercase border-white tracking-[3px] text-zinc-300 p-2 rounded-lg'>Recipes..</button>
                </NavLink>
                </div> }
                
                {location.pathname === "/recipes/create-recipe" ? <div className='h-full w-1/3 flex justify-center items-end pb-14'>
                <div className='flex flex-col  justify-center items-center'> 
                    <small className='uppercase text-xl text-zinc-400 tracking-[3px]'>cook</small>
                    <h1 className=' text-white text-5xl font-extrabold shadow-2xl '>廾しれ𝒢<span className='font-[600] italic'>𝓔</span>R</h1>
                    <h1 className='text-red-500 text-2xl font-bold uppercase pt-2'>--- with love ---</h1>
                </div>
                </div>
                :
                <div className='h-full w-1/3 flex justify-center items-end pb-14'>
                <div className='flex flex-col  justify-center items-center'> 
                    <small className='uppercase text-xl text-zinc-400 tracking-[3px]'>we are</small>
                    <h1 className=' text-white text-5xl font-extrabold shadow-2xl '>廾しれ𝒢<span className='font-[600] italic'>R</span>ン</h1>
                    <h1 className='text-red-500 text-2xl font-bold uppercase pt-2'>--- art of cooking ---</h1>
                </div>
                </div>
                }
                
                {location.pathname === "/" && <div className='h-full w-1/3  flex items-start pt-16 pr-12 justify-end'>
                <NavLink to="/favroite">
                <button className='shadow-2xl shadow-black bg-transparent hover:bg-zinc-600 border-1 uppercase border-white tracking-[3px] text-zinc-300 p-2 rounded-lg'>favourites..</button>
                </NavLink>
                </div>}
                

            </div> 
  )
}

export default FootHome