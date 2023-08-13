import React from "react";
import { images } from "../constants";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${className}`}
    >
      <img
        src={images.PostImage}
        alt="title"
        className="w-full object-center object-cover h-auto md:h-52 lg:h-48 xl:h-60"
      />
        <div className="p-5">
            <h2 className="font-quicksand font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">post</h2>
            <p className="text-dark-soft mt-3 text-sm md:text-lg">description</p>
            <div className="flex justify-between flex-nowrap items-center mt-6">
                <div className="flex items-center gap-x-2 md:gap-x-2.5">
                    {/* <img src={images.UserImage} alt="user" className="w-8 h-8 rounded-full object-cover object-center" /> */}
                <div className="flex flex-col">
                    <h4 className="font-bold italic text-dark-soft text-sm md:text-base">Name</h4>

                </div>
                </div>


                <span className="font-light text-dark-soft italic text-sm md:text-base">date</span>

            </div>
            </div>
    
    </div>
  );
};

export default ArticleCard;
