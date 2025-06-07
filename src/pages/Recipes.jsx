import Conatiner from "../components/Conatiner";
import Navhome from "../components/Navhome";
import recipebg from "../assets/recipebg.jpg"
import Homeimage from "../components/homeImage";
import RecipeCard from "../components/RecipeCard";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
const Recipes = () => {
    const {data} = useContext(recipecontext)
    return <div  className="h-screen pt-30 flex justify-center overflow-hidden items-center w-full" >
        <Homeimage/>
        <div className="relative h-full flex justify-center items-center rounded-t-4xl overflow-hidden w-3/5 bg-contain bg-top"
        style={{backgroundImage:`url(${recipebg})`}}>
            <Navhome/>
            <Outlet/>
            {data.length === 0 ? <h1>NO recipes to display</h1>:
            <div className='absolute rounded-2xl grid grid-rows-2 grid-flow-col gap-x-3 gap-y-3 overflow-x-auto scrollbar-hidden z-200 h-[80%] mt-20 w-[90%]'>
                {data.map((recipe,index) => <RecipeCard key={index} recipe={recipe} />)}
            </div>}
            <Conatiner/>
        </div>  
    </div>
};

export default Recipes;
