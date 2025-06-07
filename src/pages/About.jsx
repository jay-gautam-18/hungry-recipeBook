import React from "react";
import Navhome from "../components/Navhome";
import Conatiner from "../components/Conatiner";
import FootHome from "../components/FootHome";
import aboutbg from "../assets/aboutbg.jpg"
import Homeimage from "../components/homeImage";
const About = () => {
    return <div  className="h-screen pt-30 flex justify-center overflow-hidden items-center w-full" >
        <Homeimage/>
        <div className="relative h-full flex justify-center items-center rounded-t-4xl overflow-hidden w-3/5 bg-contain bg-top"
        style={{backgroundImage:`url(${aboutbg})`}}>
            <Navhome/>
            <Conatiner/>
            <FootHome/>
            <div className="h-4/5 w-5/6 bg-black/60 px-5 py-10 rounded-3xl z-90">
                <h1 className="text-5xl uppercase italic font-extrabold text-amber-100 text-center my-10 "><small className="font-bold text-xl">Made By</small> Jay Gautam</h1>
                <p className="text-start text-xl text-white/80 tracking-[2px] italic font-semibold ">Hungry - Recipe Book is a beginner-friendly food recipe web application built using React. It allows users to easily create, read, update, and delete recipes, as well as mark favorite dishes for quick access.
                    <br />
                    Key features include:
                        <br />
                    ✅ Add New Recipes with images, ingredients, cooking time, and instructions
                        <br />
                    🔍 View Detailed Recipe Cards with category, description, and visuals
                            <br />
                    ✏️ Update/Edit Recipes to modify existing entries
                        <br />
                    ❌ Delete Recipes from the collection
                        <br />
                    ⭐ Mark Recipes as Favourites and manage your personal list
                        <br />
                    💾 LocalStorage Integration ensures data persists across page refreshes
                        <br />
                    The UI is clean and responsive, offering a seamless experience for users who want to build their own personalized recipe book. Perfect for food lovers and home cooks, Hungry - Recipe Book makes recipe management both fun and interactive.</p>
            </div>
        </div>
    </div>
};

export default About;
