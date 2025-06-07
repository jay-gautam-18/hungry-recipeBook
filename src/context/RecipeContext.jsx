import { createContext, useState } from "react";
export const recipecontext = createContext(null);
const RecipeContext = (props) => {
    const [data, setdata] = useState(JSON.parse(localStorage.getItem('recipes')) ||[]);
    const [favourite, setfavourite] = useState(JSON.parse(localStorage.getItem('favourites')) ||[]);

    
    return (
        <recipecontext.Provider value={{ data, setdata,favourite ,setfavourite}}>
            {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
