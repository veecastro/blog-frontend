import React from "react";
import MainLayout from "../../components/MainLayout";
import Articles from "../container/Articles";
import { images } from "./../../constants";
// import background from "./../../assets/images/background.jpg";

const HomePage = () => {
    return (
        <MainLayout>
            <div className="bg-gray-100 h-screen">
                <div className="h-screen bg-cover bg-center md:h-64" style={{ backgroundImage: `url(${images.background})` }}>
                    
                        <Articles />
                    </div>
                </div>
            
        </MainLayout>
    );
};

export default HomePage;
