import React from "react";
import { images } from "../constants"
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";


const Footer = () => {
    return (
       <section className="bg-dark-hard">
        <footer className="container mx-auto grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md-grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
            <div className="col-span-5 md:col-span-4 lg:col-span-2">
                <h3 className="text-white font-regular">Contact Us</h3>
                <ul className="text-primary text-sm mt-6 space-y-4 lg:col-span-2">
                    <li>
                        <a href="/">email</a>
                    </li>
                    <li>
                        <a href="/">phone</a>
                    </li>
                </ul>
                <h3 className="text-white font-regular ">Search by</h3>
                <ul className="text-primary text-sm mt-6 space-y-4 lg:col-span-2">
                    <li>
                        <a href="/">Shop the Look</a>
                    </li>
                    <li>
                        <a href="/">Influencers</a>
                    </li>
                </ul>
               </div>
                <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
                    <img src={images.Logo} alt="logo" className="rounded w-20 h-auto" />
                    <p className="text-gray-200 text-center font-thin">Fashion Influencer Looks</p>
                    <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300">
                        <li>
                            <a href="/">
                                <CiInstagram className="w-6 h-auto" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <CiLinkedin className="w-6 h-auto" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <CiFacebook className="w-6 h-auto"/>
                            </a>
                        </li>
                        

                                
                    </ul>
                    <div className="col-span-10 md:order-first md:col-span-12 lg:col-span-10"></div>
                </div>
                <div className="hidden md-flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
                    <div className="bg-primary text-white p-3 rounded-full"></div>
                <AiOutlineHeart className="w-7 h-auto object-center" />

                </div>
                <div>
                    <p className="font-thin italic text-primary text-center">Copyright 2023</p>
                </div>
        </footer>
       </section>
    );  
}

export default Footer;