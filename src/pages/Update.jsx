import createbg from "../assets/createbg.jpg"
import Conatiner from "../components/Conatiner";
import FootHome from "../components/FootHome";
import Homeimages from "../components/Homeimages";
import Navhome from "../components/Navhome";
import UpdateForm from "../components/UpdateForm";

const Update = () => {
    return <div  className="h-screen pt-30 flex justify-center overflow-hidden items-center w-full" >
        <Homeimages/>        
        <div className="relative h-full  rounded-t-4xl overflow-hidden w-3/5 bg-contain bg-top"
        style={{backgroundImage:`url(${createbg})`}}>
            <Navhome/>
            <Conatiner/>
            <FootHome/>
            <UpdateForm/>
        </div>
    </div>
};

export default Update;