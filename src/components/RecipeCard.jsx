import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
const RecipeCard = ({recipe}) => {
  const {favourite , setfavourite} = useContext(recipecontext)

  const favHandler = ()=>{
    setfavourite([...favourite,recipe])
    localStorage.setItem('favourites',JSON.stringify(favourite))
    toast.success('added to favourites')
  }
  const unFavHandler = ()=>{
    const copyFav = favourite.filter( r => r.id !== recipe.id)
    setfavourite(copyFav);    
    localStorage.setItem('favourites',JSON.stringify(copyFav))
    toast.success('removed from favourites')
  }  
  console.log(favourite);
 const navigate = useNavigate()
  return (
    <div className='bg-[#202020]/95 hover:bg-[#DD1926]/60 p-4 min-h-[35vh] max-h-[35vh] rounded-xl max-w-[28vh] min-w-[28vh]'>
      <div style={{
        backgroundImage:`url(${recipe.image})`
      }}
       className='h-[70%] relative shadow-2xl shadow-black flex p-2 items-center justify-center bg-cover rounded-xl w-full'>
        <div  onClick={()=> navigate(`/recipes/details/${recipe.id}`)} className='flex hover:bg-red-600/60  justify-center items-center h-8 w-8 absolute top-[80%] left-[83%] z-10  rounded-full border-1 border-amber-50'>
          <h1 className='text-white font-bold'>i</h1>
        </div>
      </div>
      <div className='h-[30%] w-full flex'>
          <div className='h-full text-white w-2/3 flex flex-col justify-center items-start'>
              <h2 className='text-sm font-bold opacity-70'>{recipe.category}</h2>
              <h1 onClick={()=> navigate(`/recipes/details/${recipe.id}`)} className='text-xl font-bold tracking-[1px]'>{recipe.name}</h1>
          </div>
          <div className='h-full w-1/3  flex flex-col justify-center space-y-2 items-center'>
            <h1 className='text-white tracking-tighter text-2xl'>{recipe.cookingTime}:00<span className='text-sm'>Min</span></h1>
            {favourite.includes(recipe) ? 
            <button onClick={unFavHandler} className='px-4  py-1 bg-[#78e943] font-bold rounded-sm'>Added</button> : 
            <button onClick={favHandler} className='px-4  py-1 bg-[#E99543] font-bold rounded-sm'>Add</button>}
          </div>
      </div>
      
    </div>
  )
}

export default RecipeCard