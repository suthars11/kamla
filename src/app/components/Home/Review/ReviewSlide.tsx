// "use client"
// import { userReviewData } from "@/app/data/data";
// import React from "react";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ReviewCard from "./ReviewCard";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1324 },
//     items: 3,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1324, min: 764 },
//     items: 3,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 764, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const ReviewSlide = () => {
//   return (
//     <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}>
//         {
//             userReviewData.map((review)=>{
//                 return(
//                     <div key={review.id}>
//                         <ReviewCard review={review}/>

//                     </div>
//                 )
//             })

//         }
      
//     </Carousel>

//   );
// };

// export default ReviewSlide;

"use client";
import { userReviewData } from "@/app/data/data";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ReviewSlide = () => {
  return (
    <Carousel
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      showDots={true} // Enable dots
      dotListClass="custom-dot-list-style" // Optional: Add a custom class for styling
    >
      {userReviewData.map((review) => {
        return (
          <div key={review.id}>
            <ReviewCard review={review} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ReviewSlide;
