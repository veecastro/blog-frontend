import React from 'react';
import MainLayout from '../../components/MainLayout';
import { images } from '../../constants';
import { CgProfile } from 'react-icons/cg';

const ArticleDetailPage = () => {
    return (
        <MainLayout>
            <div className="container mx-auto px-5 py-10">
                <div className="w-full flex flex-nowrap md:gap-x-5 gap-y-2">
                    <div className="w-full md:w-1/2">
                        <img src={images.floralBlouse} alt="" className="w-40 h-50 object-cover rounded-lg mb-5 md:mb-0"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={images.miniCityBag} alt="" className="w-40 h-50 object-cover rounded-lg"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={images.heeledMule} alt="" className="w-40 h-50 object-cover rounded-lg"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={images.cropDenim} alt="" className="w-40 h-50 object-cover rounded-lg"/>
                    </div>
                  
                

                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-bold text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        <div className="flex items-center gap-x-2 mt-5">
                            <CgProfile alt="" className="w-50 h-50 rounded-full object-cover"/>
                            <div>
                                <h3 className="text-sm font-bold text-primary">veronica </h3>
                                <p className="text-xs text-gray-500">12th June 2023</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        <p className="text-sm text-gray-500 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        <p className="text-sm text-gray-500 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        <p className="text-sm text-gray-500 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ArticleDetailPage;
