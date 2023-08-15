import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import CommentsContainer from "../../components/comments/CommentsContainer";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import parseJsonToHTML from "../../utils/parseJsonToHtml";
import { getSinglePost } from "../../services/index/posts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";


const ArticleDetailPage = () => {
    const { slug } = useParams();
    const userState = useSelector((state => state.user));
    const [breadCrumbsData, setbreadCrumbsData] = useState([]);
    const [body, setBody] = useState(null);

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getSinglePost({ slug }),
        queryKey: ["blog", slug ],
        onSuccess: (data) => {
            setbreadCrumbsData([
                { name: "Home", link: "/" },
                { name: "Blog", link: "/blog" },
                // use blog id to get the title
                { name: data?.title, link: `/blog/${data?.slug}` },
                // { name: "Article title", link: `/blog/1},
        ]);
        //coverts json to html
        setBody(parseJsonToHTML(data?.body));
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error loading data</div>;
      }



    return (
    <MainLayout>
<section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
    <article className="flex-1">
        <BreadCrumbs data={breadCrumbsData} />
        <img 
        className="w-full" 
        src={images.samplePostImage} alt={data?.title}  
        />
        <div className="mt-4 flex gap-2">

        {data?.categories.map((category) =>  (
            <Link to="/blog?category=selectedCategory" className="text-primary text-sm font-quicksand inline-block md:text-base"
                key={category._id}
                >
                {category.name}

            </Link>
        )
        )}
        </div>
        
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              {data?.title}
            </h1>
            <div className="mt-4 prose prose-sm sm-prose-base">{body}</div>


            <CommentsContainer 
            comments={data?.comments}
            className="mt-10" loggedInUserId={userState?.userInfo?._id}

            />
          </article>


    

    
</section>

    </MainLayout>
    );
    }

export default ArticleDetailPage;