import React from 'react'
import knife from "../assets/kinife.png"
import spoonFork from "../assets/spoonFork.png"
import Sushi from '../assets/sushiPlate.png'
const ContainerImage = () => {
  return (
    <>
    <img className='absolute z-98 h-[40vh] rotate-30 left-[70%] ' src={knife}  />
            <img className='absolute z-98 h-[50vh] rotate-12' src={spoonFork}  />
            <div className='h-[41vh] w-[41vh] flex justify-center items-center rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 z-98 '>
            <img src={Sushi}  />
            </div>
    </>
  )
}

export default ContainerImage