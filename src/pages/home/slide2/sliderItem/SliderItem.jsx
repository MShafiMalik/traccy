import React from "react";

const SliderItem = (props) => {
  const { srNo, icon, title, subTitle } = props.data;
  console.log(props);

  return (
    <div className="container-fluid">
      <p className="text-light">{srNo}</p>
    </div>
  );
};

export default SliderItem;
