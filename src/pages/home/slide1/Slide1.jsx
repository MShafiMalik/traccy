import { useEffect, useRef } from "react";
import GlobeContainer from "../../../components/globe/GlobeContainer";
import "./Slide1.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EastIcon from "@mui/icons-material/East";

const Slide1 = () => {
  const sectionsRef = useRef();
  const indicatorsRef = useRef();
  const slideNoRef = useRef();

  let sections;
  let indicators;
  let slideNos;
  let txtsLen;
  let index = 0;
  let animateFlag = true;
  let firstSlideFlag = true;
  let slideTime = 0;

  function animateText() {
    for (let i = 0; i < txtsLen; i++) {
      sections[i].classList.remove("slide-in");
      indicators[i].classList.remove("active");
      slideNos[i].classList.remove("slide-in-no");
    }
    sections[index].classList.add("slide-in");
    indicators[index].classList.add("active");
    slideNos[index].classList.add("slide-in-no");
    setTimeout(function () {
      animateText();
      if (index == txtsLen - 1) {
        index = 0;
      } else {
        index++;
      }
    }, slideTime);
    if (firstSlideFlag === true) {
      slideTime = 4000;
      firstSlideFlag = false;
    }
  }

  useEffect(() => {
    sections = sectionsRef.current.children;
    indicators = indicatorsRef.current.children;
    slideNos = slideNoRef.current.children;
    txtsLen = sections.length;
    if (animateFlag === true) {
      animateText();
    }
    animateFlag = false;
  }, []);

  return (
    <div className="slide1">
      <GlobeContainer />
      <div className="content row container-fluid">
        <div className="col-8 left-section my-auto">
          <div
            className="moving-text-contain container-fluid"
            ref={sectionsRef}
          >
            <section className="ps-5 moving-text">
              <h1 className="primary-color">This is</h1>
              <div className="row no-gutters ms-1">
                <div className="col-md-1 col-2 px-0">
                  <hr className="line" />
                </div>
                <div className="col-md-11 col-10 px-0 ps-2">
                  <h1 className="mb-0 text-light fw-normal">Glibekit</h1>
                </div>
              </div>
              <div className="paragraph mt-5">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </section>

            <section className="ps-5 moving-text">
              <h1 className="primary-color">Powerful</h1>
              <div className="row no-gutters ms-1">
                <div className="col-md-1 col-2 px-0">
                  <hr className="line" />
                </div>
                <div className="col-md-11 col-10 px-0 ps-2">
                  <h1 className="mb-0 text-light fw-normal">Performance</h1>
                </div>
              </div>
              <div className="paragraph mt-5">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </section>

            <section className="ps-5 moving-text">
              <h1 className="primary-color">Highly</h1>
              <div className="row no-gutters ms-1">
                <div className="col-md-1 col-2 px-0">
                  <hr className="line" />
                </div>
                <div className="col-md-11 col-10 px-0 ps-2">
                  <h1 className="mb-0 text-light fw-normal">Customizable</h1>
                </div>
              </div>
              <div className="paragraph mt-5">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </section>

            <section className="ps-5 moving-text">
              <h1 className="primary-color">Cross</h1>
              <div className="row no-gutters ms-1">
                <div className="col-md-1 col-2 px-0">
                  <hr className="line" />
                </div>
                <div className="col-md-11 col-10 px-0 ps-2">
                  <h1 className="mb-0 text-light fw-normal">Plateform</h1>
                </div>
              </div>
              <div className="paragraph mt-5">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </section>

            <section className="ps-5 moving-text">
              <h1 className="primary-color">Request</h1>
              <div className="row no-gutters ms-1">
                <div className="col-md-1 col-2 px-0">
                  <hr className="line" />
                </div>
                <div className="col-md-11 col-10 px-0 ps-2">
                  <h1 className="mb-0 text-light fw-normal">a Queue</h1>
                </div>
              </div>
              <div className="paragraph mt-5">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </section>

            <section className="ps-5 moving-text form">
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Category" />
                <input type="text" placeholder="Category" />
                <textarea
                  name=""
                  rows="2"
                  placeholder="Lorem ipsum dolor sit amet consectetur"
                ></textarea>
              </form>
            </section>
          </div>

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
            <h1 className="light-color slide-no mb-0">
              <span>0</span>
              <span ref={slideNoRef}>
                <span className="slide-no-count">1</span>
                <span className="slide-no-count">2</span>
                <span className="slide-no-count">3</span>
                <span className="slide-no-count">4</span>
                <span className="slide-no-count">5</span>
                <span className="slide-no-count">6</span>
              </span>
            </h1>
            <h4 className="light-color slide-counts">/6</h4>
            <p className="light-color mb-0 mt-4">
              <small>2022 Terms of Use |</small>
            </p>
            <a href="#" className="primary-color privacy-policy-link">
              Privacy Policy <EastIcon />
            </a>
            <ul className="slide-indicators mt-5" ref={indicatorsRef}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
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
