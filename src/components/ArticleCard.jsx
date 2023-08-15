import React from "react";
import { images } from "../constants";
import { Link } from "react-router-dom";

const ArticleCard = ({ slug, className }) => {
  

  return (
    <div className="flex items-center justify-center w-full h-screen">
    <div
      className={`overflow-hidden ${className} w-full lg-w-[calc(50%-20Px)] xl:w-[calc(33.333333%-20px)] 2xl:w-[calc(25%-20px)] x1:w-[calc(33.33%-21px)]`}
    >
        <img
          src={images.samplePostImage}
          alt="title"
          className="w-full object-center object-cover h-auto md:h-52 lg:h-80 xl:h-90"
        />
      

      <div className="p-5">
          <Link to={`/blog/${slug}`}>
          <h2 className="font-quicksand font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
            whats trending?
           
          </h2>
          <p className="text-dark-soft mt-3 text-sm md:text-lg">
         
            checkout whats new this season
          </p>
        </Link>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                
                veronica
              </h4>
              <div className="flex items-center gap-x-2">{/* verfied? */}</div>
            </div>
          </div>

          <span className="font-light text-dark-soft italic text-sm md:text-base">
         
            
  
          </span>
        </div>
      </div>
    </div>
    </div>
    







  );
};

export default ArticleCard;
