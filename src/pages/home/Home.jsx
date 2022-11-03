import Header from "../../layouts/header/Header";
import "./Home.scss";
import Slide1 from "./slide1/Slide1";
import Slide2 from "./slide2";
import Slide from "./slide2/Slide";

const Home = () => {
  return (
    <div className="home-page container-fluid">
      <Header />
      <Slide1 />
      {/* <Slide /> */}
      {/* <Slide2 /> */}
    </div>
  );
};

export default Home;
