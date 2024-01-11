import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[280px] md:h-[800px] overflow-hiddenz">
      <div className="absolute top-0 left-0 w-full h-full md:h-[32rem] lg:h-[36rem] xl:h-[40rem] overflow-hidden rounded-xl">
       
          <img
            src="../public/banner.jpg.jpg" 
            alt="Image 2"
            className="w-full h-full object-cover"
          />
      </div>
    </div>
  );
};

export default HeroBanner;
