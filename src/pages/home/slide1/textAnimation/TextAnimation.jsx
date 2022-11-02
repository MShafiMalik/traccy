import { useEffect, useRef } from "react";
import "./TextAnimation.scss";

const TextAnimation = () => {
  const sectionsRef = useRef();
  let sections;
  let txtsLen;
  let index = 0;
  let animateFlag = true;

  function animateText() {
    for (let i = 0; i < txtsLen; i++) {
      sections[i].classList.remove("slide-in");
    }
    sections[index].classList.add("slide-in");
    setTimeout(function () {
      animateText();
      if (index == txtsLen - 1) {
        index = 0;
      } else {
        index++;
      }
    }, 2000);
  }

  useEffect(() => {
    sections = sectionsRef.current.children;
    txtsLen = sections.length;
    if (animateFlag === true) {
      animateText();
    }
    animateFlag = false;
  }, []);

  return (
    <div className="moving-text-contain container-fluid" ref={sectionsRef}>
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
  );
};

export default TextAnimation;
