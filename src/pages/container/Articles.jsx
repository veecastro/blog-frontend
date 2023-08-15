import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "../../components/ArticleCard";
// import { useQuery } from "@tanstack/react-query";
// import { getAllPosts } from "../../services/index/posts";
// import { toast } from "react-hot-toast";
// import ErrorMessage from "../../components/ErrorMessage";
// import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";


const Articles = () => {
    // const {} = useQuery({
    //     queryFn: () => getAllPosts(),
    //     queryKey: ["posts"],
    //     onError: (error) => {
    //         toast.error(error.message);
    //         console.log(error);
    //     },
    // });
       
    return (
        <section className="container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
            <div className="w-full flex flex-wrap md-gap-x-5 gap-y-5 pb-10">
           {/* {isLoading && | isError && data.map((post) => (
               <ArticleCard key={post._id} post={post} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" /> */}

           
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
            </div>
            <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3">
                <span>View All</span>
                <FaArrowRight className="w-3 h-3"/>
            </button>

            </section>
    );
};



export default Articles;
    

//need redux to get articles from backend