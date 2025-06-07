import Mainroutes from "./routes/Mainroutes";
import bgImg from "./assets/background.jpg"
const App = () => {
    return (
        <div className=" bg-cover bg-center h-screen overflow-hidden" 
        style={{ backgroundImage: `url(${bgImg})` }}>
            <Mainroutes />
        </div>
    );
};

export default App;
