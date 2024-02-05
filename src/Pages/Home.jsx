import Faq from "../Features/Faq/Faq";
import About from "../Features/Home/About";
import Contact from "../Features/Home/Contact";
import Intro from "../Features/Home/Intro";
import Map from "../Features/Home/Map";
import Menus from "../Features/Home/Menus";
import Story from "../Features/Home/Story";
import Testimonials from "../Features/Home/Testimonials";
import Team from "../Features/Team/Team";
import Carousel from "../ui/Carousel";

const Home = () => {
 return (
  <>
   <Intro />
   <Menus />
   <Story />
   <Carousel />
   <Testimonials />
   <About />
   <Team />
   <Faq />
   <Contact />
   <Map />
  </>
 );
};

export default Home;