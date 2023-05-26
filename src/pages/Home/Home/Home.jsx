import About from "../About/About";
import Cetegoty from "../Cetegoty/Cetegoty";
import Slider from "./Slider/Slider";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "../CallUs/CallUs";
import ChefRecomended from "../ChefRecomended/ChefRecomended";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Cetegoty></Cetegoty>
            <About></About>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecomended></ChefRecomended>
            <FromOurMenu></FromOurMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;