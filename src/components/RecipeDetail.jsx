import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowDropleft } from "react-icons/io";
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
const RecipeDetail = () => {
    const {data ,setdata , favourite , setfavourite} = useContext(recipecontext)
    const navigate = useNavigate()
    const {id} = useParams()
    const recipe = data.find(r => r.id == id)
    if(!recipe) return null;
    const deleteHandler= ()=>{
        const copyData = data.filter( r=> r.id !== id)
        const copyFav = favourite.filter(r=> r.id !== id)
        setdata(copyData);
        setfavourite(copyFav)
        localStorage.setItem('recipes',JSON.stringify(copyData))
        localStorage.setItem('favourites',JSON.stringify(copyFav))
        toast.success('recipe deleted')
        navigate(-1)
    }
  return (
    <div className='h-4/5 shadow-2xl shadow-neutral-700 absolute mt-20 z-201 w-9/10 bg-black/70 flex overflow-scroll scrollbar-hidden rounded-2xl '>
        <div className=' h-full w-3/5 flex flex-col justify-center items-center p-2 '>
            <img className='rounded-2xl shadow-2xl shadow-neutral-700' src={recipe.image} />
            <div className='flex text-white pt-12 space-x-14'>
                    <button onClick={()=> navigate(`/recipes/update-recipe/${recipe.id}`)} className='px-5 border-1 hover:bg-amber-100 hover:text-red-500 bg-black/70 shadow-lg shadow-white/60 border-amber-50 rounded-2xl uppercase py-2  font-bold text-xl'>update</button>
                    <button onClick={deleteHandler} className='px-5 border-1 hover:bg-amber-100 hover:text-red-500 bg-black/70 shadow-lg shadow-white/60 border-amber-50 rounded-2xl uppercase py-2  font-bold text-xl'>delete</button>
                </div>
        </div>
        <div className='h-full w-2/5 px-3 py-10'>
            <h1 className='text-5xl font-semibold tracking-[-1.5px] text-amber-100/90 '>{recipe.name}</h1>
            <h2 className='text-2xl text-white/70 text-end mt-2 font-semibold mr-10'>{recipe.cookingTime}<span className='text-xl'>Min</span></h2>
            <div className='w-full mt-4 pb-4'>
                <h1 className='text-2xl font-semibold pl-4 italic text-white/70'>Category:-</h1>
                <p className='text-white text-xl pl-4 italic mb-2'>{recipe.category} </p>
                <h1 className='text-2xl font-semibold pl-4 italic text-white/70'>Ingredients:-</h1>
                <p className='text-white text-xl pl-4 italic mb-2'>{recipe.ingredients}</p>
                <h1 className='text-2xl font-semibold pl-4 italic text-white/70'>Instructions:-</h1>
                <p className='text-white text-xl pl-4 italic'>{recipe.instructions}</p>
            </div>
        </div>
        <button onClick={()=> navigate(-1)} className='absolute p-3 text-7xl text-white/80'><IoIosArrowDropleft /></button>
    </div>
  )
}

export default RecipeDetail