import LandingV2 from "./components/LandingV2/LandingV2";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <LandingV2 />
      <Projects />
      <Services />
    </>
  );
};

export default Home;
