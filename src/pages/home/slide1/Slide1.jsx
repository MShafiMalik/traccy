import GlobeContainer from "../../../components/globe/GlobeContainer";
import "./Slide1.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EastIcon from "@mui/icons-material/East";
import TextAnimation from "./textAnimation/TextAnimation";

const Slide1 = () => {
  return (
    <div className="slide1">
      <GlobeContainer />
      <div className="content row container-fluid mt-5">
        <div className="col-8 left-section my-auto">
          <TextAnimation />

          <button type="button" className="home-slider-btn">
            Watch video
            <img
              src="assets/images/home/arrow.svg"
              width="12"
              alt="arrow"
              className="ms-3"
            />
          </button>
        </div>
        <div className="col-4 right-section">
          <section>
            <h1 className="light-color slide-no mb-0">02</h1>
            <h4 className="light-color slide-counts">/5</h4>
            <p className="light-color mb-0 mt-4">
              <small>2022 Terms of Use |</small>
            </p>
            <a href="#" className="primary-color privacy-policy-link">
              Privacy Policy <EastIcon />
            </a>
            <ul className="slide-indicators mt-5">
              <li></li>
              <li className="active"></li>
              <li></li>
            </ul>
          </section>
          <div className="social-icons d-flex ms-auto">
            <span className="text-grey ms-auto">Share</span>
            <hr className="line ms-auto" />
            <div className="text-light ms-auto">
              <span className="mx-2">
                <TwitterIcon />
              </span>
              <span className="mx-2">
                <FacebookIcon />
              </span>
              <span className="mx-2">
                <InstagramIcon />
              </span>
              <span className="mx-2">
                <LinkedInIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;