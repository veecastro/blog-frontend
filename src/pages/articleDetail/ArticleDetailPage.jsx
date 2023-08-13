import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const breadCrumbsData = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Article title", link: "/blog/1" },
];

const ArticleDetailPage = () => {
    return (
    <MainLayout>
<section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
    <article className="flex-1">
        <BreadCrumbs data={breadCrumbsData} />
        <img className="w-full" src={images.PostImage} alt="fashion"  />
        <Link to="/blog?category=selectedCategory" className="text-primary text-sm font-quicksand inline-block md:text-base">
            ACCESSORIES
        </Link>
        <h1 className="text-xl font-medium font-quicksand mt-4 text-dark-hard md:text-[26px]">whats in?</h1>
        <div className="mt-4 text-dark-soft">
            <p className="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quibusdam. Quisquam, voluptatum. Quisquam
                voluptatibus, quibusdam. Quisquam voluptatibus, quibusdam.
            </p>
        </div>
        {/* <div className="w-full">
              {!isLoading && !isError && (
                <Editor content={data?.body} editable={false} />
              )}
            </div> */}
    </article>

    
</section>

    </MainLayout>
    );
    }

export default ArticleDetailPage;