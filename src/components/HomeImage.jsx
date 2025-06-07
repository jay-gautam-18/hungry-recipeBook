import React from 'react'
import Chop from "../assets/choppingBoard.png"
import leaves from '../assets/leaves.png'
import cloth from '../assets/cloth.png'
const Homeimage = () => {
  return (
    <>
            <div className='absolute  top-16 flex flex-col justify-center space-y-[-10px] left-[55%] text-white uppercase opacity-75 '>
                <small className='font-bold text-red-600 text-xl'>We Are </small>
                <h1 className='font-semibold  text-2xl'>Distinguished</h1>
            </div>
            <img src={Chop} className='absolute h-[60vh] z-101 top-7 right-10' />
            <img src={leaves} className='absolute h-[60vh] z-103  top-[-7%] right-30 rotate-90' />
            <h1 className='text-8xl font-[900] text-zinc-200 absolute z-102 top-65 rotate-10 right-10 uppercase'>Yummy</h1>
            <div className='absolute top-0 left-0 bg-transparent h-screen w-3/5 overflow-hidden z-104'>
            <img src={cloth}  className='absolute h-[60vh]  z-109 top-[61%] left-0'/>
            </div>
    </>
  )
}

export default Homeimage