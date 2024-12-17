import React from "react";
import SectionHeading from "../../SectionHeading";
import ReviewSlide from "./ReviewSlide";
// import ReviewSlide from "./ReviewSlide";

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fef7f6]">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Our Clients Reviews" />
        <ReviewSlide/>
      </div>
    </div>
  );
};

export default Review;
