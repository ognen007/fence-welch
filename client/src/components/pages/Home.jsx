import Navbar from "../Navbar";
import Header from "../Header";
import DrawSection from "../DrawSection";
import Fences from "../Fences";
import People from "../People";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <People/>
            <Fences/>
        </div>
    )
}

export default Home;