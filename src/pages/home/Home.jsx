import Header from "../../layouts/header/Header";
import "./Home.scss";
import Slide1 from "./slide1/Slide1";

const Home = () => {
  return (
    <div className="home-page container-fluid">
      <Header />
      <Slide1 />
    </div>
  );
};

export default Home;
