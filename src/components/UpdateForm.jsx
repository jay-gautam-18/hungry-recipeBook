import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowDropleft } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const UpdateForm = () => {
  const { data, setdata } = useContext(recipecontext)
    const {id} = useParams()
    const CurrentRecipe = data.find( r => r.id === id)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: CurrentRecipe
    });
    const navigate = useNavigate()
    

    const updateHandler = (recipe) => {
        const index = data.findIndex( r => r.id==id)
        const copyData = [...data];
        copyData[index] = {...copyData[index],...recipe}
        setdata(copyData)
        localStorage.setItem('recipes',JSON.stringify(copyData))
        toast.success('recipe updated')
        navigate(-1)
  };

  return (
    <div className="w-2/3 h-2/3 text-white rounded-4xl bg-white/40 p-4 translate-x-[-50%] relative translate-y-[-50%] top-[52%] left-[50%]  z-110 shadow-zinc-500 shadow-2xl ">
        <button onClick={()=> navigate(-1)} className='absolute z-300 top-[-20%] left-[-20%] p-3 text-7xl text-white'><IoIosArrowDropleft /></button>
      <h2 className=" font-semibold text-5xl text-center mb-4 italic">Update Recipe</h2>
      <form onSubmit={handleSubmit(updateHandler)} className="space-y-3">
        {/* Recipe Name */}
        <div>
          <input
            type="text"
            {...register('name', { required: 'Recipe name is required' })}
            className="w-full p-2 border text-xl rounded-2xl bg-black/40 tracking-[1px]"
            placeholder='Recipe Name'
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        {/* instructions */}
        <div>
          <textarea
            type="text"
            {...register('instructions', { required: 'Recipe name is required' })}
            className="w-full p-2 border text-xl rounded-2xl bg-black/40 tracking-[1px]"
            placeholder='How To make It ?'
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <textarea
            {...register('ingredients', { required: 'Ingredients are required' })}
            className="w-full p-2 border text-xl rounded-2xl bg-black/40 tracking-[1px]"
            placeholder='Ingredients'
          />
          {errors.ingredients && (
            <p className="text-red-500">{errors.ingredients.message}</p>
          )}
        </div>

        {/* image */}
        <div>
          <textarea
            {...register('image', { required: 'image are required' })}
            type="url"
            className="w-full p-2 border text-xl rounded-2xl bg-black/40 tracking-[1px]"
            placeholder='Image , Url only'
          />
          {errors.instructions && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        {/* Cooking Time */}
        <div className='flex justify-evenly items-center text-white'>
          <div>
          
          <input
            type="number"
            {...register('cookingTime', {
              required: 'Cooking time is required',
              min: { value: 1, message: 'Must be at least 1 minute' }
            })}
            className=" bg-black/60 text-xl font-[400] tracking-[2px] rounded-3xl outline-0 py-3 px-2"
            placeholder='Cooking time'
            />
          {errors.cookingTime && (
            <p className="text-red-500">{errors.cookingTime.message}</p>
          )}
          </div>
            <select
                className=" bg-black/60 text-xl font-[400] tracking-[2px] rounded-3xl outline-0 py-3 px-5"
                {...register("category")}
            >
                <option className=" bg-black/60 text-xl font-[400] tracking-[2px] rounded-3xl outline-0 py-3 px-5" value="breakfast">Breakfast...</option>
                <option className=" bg-black/60 text-xl font-[400] tracking-[2px] rounded-3xl outline-0 py-3 px-5" value="lunch">Lunch...</option>
                <option className=" bg-black/60 text-xl font-[400] tracking-[2px] rounded-3xl outline-0 py-3 px-5" value="supper">Supper...</option>
                <option className=" bg-black/60 text-xl font-[400] tracking-[2px] rounded-3xl outline-0 py-3 px-5" value="dinner">Dinner...</option>
            </select>
        </div>
        

        {/* Submit Button */}
        <button
          type="submit"
          className="hover:bg-red-600 bg-red-500 hover:font-[500] absolute translate-x-[-50%] text-xl top-[87%] tracking-[2px] rounded-3xl outline-0 py-3 px-5 font-[400] translate-y-[-50%] left-[55%] text-white  "
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default UpdateForm