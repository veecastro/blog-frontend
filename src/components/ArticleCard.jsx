import React from "react";
import { images } from "../constants";
import { Link } from "react-router-dom";
// import { BsCheckLg } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";

const ArticleCard = ({ post, className }) => {
  ArticleCard.defaultProps = {
    post: {},
    user: {}
  };
  if (!post) return <div>Loading...</div>;

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={images.samplePostImage}
          alt="title"
          className="w-full object-center object-cover h-auto md:h-52 lg:h-80 xl:h-90"
        />
      </Link>

      <div className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-quicksand font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
            {post?.title}
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg">
            {post?.caption}
          </p>
        </Link>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <div className="flex flex-col">
              {post.user &&
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {post.user.name}
              </h4>}
              {/* <div className="flex items-center gap-x-2">Verified</div>
              <span
                className={`${
                  post.user.verified ? "bg-[#36B37E]" : "bg-red-500"
                } w-fit bg-opacity-20 p-1.5 rounded-full`}
              >
                {post.user.verified ? (
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                ) : (
                  <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                )}
              </span>
              <span className="italic text-dark-light text-xs md:text-sm">
                {post.user.verified ? "Verified" : "Unverified"} writer
              </span>
            </div> */}
          </div>


          <span className="font-light text-dark-soft italic text-sm md:text-base">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};




export default ArticleCard;
