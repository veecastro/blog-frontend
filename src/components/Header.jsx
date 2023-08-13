import React, { useState } from "react";
import {CiMenuBurger} from "react-icons/ci";
import {IoCloseOutline} from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";


import { images } from "../constants"



//creating this const to make it easier to add more nav items w/o having to add more code
const navItemsInfo = [
    { name: "Clothing", type: "link"},
    { name: "Accessories", type: "dropdown", items: ["Bags", "Jewelry"] },
    { name: "Shoes", type: "link" },
    { name: "Home", type: "link" },
];

const NavItem = ({ item }) => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdownHandler = () => {
      setDropdown((curState) => {
        return !curState;
      });
    };
  
    return (
         <li className="relative-group">
            {item.type === "link" ? (
            <>
            <a href="/" className="px-4 py-2">
                {item.name}
                </a>
            <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
                 / 
                 </span>
                 </> 
                 ) : (
                 <div className="flex flex-col items-center">
                    <button
                    className="px-4 py-2 flex gap-x-1 items-center text-white"
                    onClick={toggleDropdownHandler}
                    >
                        <span>{item.name}</span>
                        <MdKeyboardArrowDown />
                    </button>
                    <div className={`${dropdown ? "block" : "hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
             <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                        {item.items.map((accessories) => (
                            <a href="/" className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft transition-all duration-300"
                            >
                                {accessories}
                            </a>
                        ))}

                    </ul>
                    
                    </div>
                    </div>
                    )}
                    </li>
    );
};

const Header = () => {
const [navIsVisible, setNavIsVisible] = useState(false);

const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
        return !curState;
    });
};

    return (
        <section>

        <header className="container mx-auto px-5 flex justify-between py-4 items-center">
       <div>
        <img className="w-full" src={images.Logo} alt="Logo" />
       </div>
       <div className="lg:hidden z-50">
        {navIsVisible ? (
        <IoCloseOutline className="w-6 h-6" onClick={navVisibilityHandler}
        /> 

        ) : (
         <CiMenuBurger className="w-6 h-6" onClick={navVisibilityHandler}
         />
        )}
       </div>
       <div 
       className={`${
        navIsVisible ? "right-0" : "-right-full"
       } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
         >

       <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-quicksand">
            {navItemsInfo.map((item) => (
                <NavItem key={item.name} item={item} />
            ))}

            
        </ul>
        <button className="mt-5 lg:mt-0 border-2 border-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-500 hover:text-black transition-all duration-300">Sign In</button>
       </div>
        </header>

        </section>
    );
    }

export default Header;

//change fonts, colors, and sizes, animations
//change color of text for accessories on bigscreen 
