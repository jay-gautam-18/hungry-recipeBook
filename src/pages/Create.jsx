import createbg from "../assets/createbg.jpg"
import Conatiner from "../components/Conatiner";
import FootHome from "../components/FootHome";
import Homeimage from "../components/Homeimages";
import Navhome from "../components/Navhome";
import Recipeform from "../components/Recipeform";
const Create = () => {
    return <div  className="h-screen pt-30 flex justify-center overflow-hidden items-center w-full" >
        <Homeimage/>
        <div className="relative h-full  rounded-t-4xl overflow-hidden w-3/5 bg-contain bg-top"
        style={{backgroundImage:`url(${createbg})`}}>
            <Navhome/>
            <Conatiner/>
            <FootHome/>
            <Recipeform/>
        </div>
    </div>
};

export default Create;
