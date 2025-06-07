import homeBg from '../assets/home-bg.jpg'

import Navhome from '../components/Navhome';

import FootHome from '../components/FootHome';
import HomeImage from '../components/homeImage';
import Conatiner from '../components/Conatiner';
import ContainerImage from '../components/ContainerImage';



const Home = () => {
    return <div  className="h-screen pt-30 flex justify-center overflow-hidden items-center w-full ">
        <HomeImage/>
        <div className="relative h-full  rounded-t-4xl overflow-hidden w-3/5 bg-contain bg-center"
        style={{backgroundImage:`url(${homeBg})`}}>
            <ContainerImage/>
            <Navhome/>
            <Conatiner/>
            <FootHome/>
        </div>
        
    </div>;
};

export default Home;
