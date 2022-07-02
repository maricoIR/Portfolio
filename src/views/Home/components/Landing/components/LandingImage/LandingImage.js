import React from "react";
import Picture from "../../../../../../assets/images/man.png";

const LandingImage = () => {
  return (
    <img
      src={Picture}
      className="absolute bottom-0 w-[47%] left-[26%] z-[50]"
    />
  );
};

export default LandingImage;
