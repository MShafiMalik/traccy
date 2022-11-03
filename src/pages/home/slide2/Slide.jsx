import "./Slide2.scss";
import SliderItem from "./sliderItem/SliderItem";

const Slide = () => {
  const sliderData = [
    {
      srNo: "01",
      icon: "abc",
      title: "TRCY Token",
      subTitle: "TRCY Token",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div className="slider-wrapper">
            <div className="slider-item">
              <SliderItem data={sliderData[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
