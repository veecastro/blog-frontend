import React from "react";
import ArticleCard from "../../components/ArticleCard";

const articleData = [
    {
        _id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        createdAt: "2021-06-12T18:30:00.000Z",
        user: {
            _id: 1,
            name: "John Doe",
        },
    },
    
];





const Articles = () => {
    return (
        <div className="container mx-auto px-5 py-10">
            <div className="w-full flex flex-wrap md:gap-x-5 gap-y-5">
                {articleData.map((article) => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </div>
        </div>
    );
};


   



export default Articles;
    

//need redux to get articles from backend