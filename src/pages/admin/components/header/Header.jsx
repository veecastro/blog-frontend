import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { CiMenuBurger } from "react-icons/ci"
import { images } from "../../../../constants"
import { AiFillDashboard } from "react-icons/ai"
import { FaComments } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import NavItem from "./NavItem"
import NavItemCollapse from "./NavItemCollapse"
import { useWindowSize } from "react-use"

    const MENU_ITEMS = [
    {
        title: "Dashboard",
        link: "/admin",
        icon: <AiFillDashboard className="text-xl" />,
        name: "dashboard",
        type: "link",
    },
    {
        title: "Comments",
        link: "/admin/comments",
        icon: <FaComments className="text-xl" />,
        name: "comments",
        type: "link",
    },
    {
        title: "Posts",
        content: [
            {title: "New", link: "/admin/posts/new" },
            {title: "Manage", link: "/admin/posts/manage" }
        ],
        icon: <MdDashboard className="text-xl" />,
        name: "posts",
        type: "collapse",
    }
];

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeNavName, setActiveNavName] = useState("dashboard");
    const windowSize = useWindowSize();

    const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
   };

   //with windowSize hook we can check the width of the window
   useEffect(() => {
    if (windowSize.width < 1024) {
        setIsMenuActive(false);
    } else {
        setIsMenuActive(true);
    }
    }, [windowSize.width]);





    
    return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start ">
        {/* logo */}
        <Link to="/">
            <img src={images.Logo} alt="logo" className="w-16" />
        </Link>
        {/* menu burger */}
        <div>
            {isMenuActive ? (
                <IoCloseOutline className="w-6 h-6" onClick={toggleMenuHandler} />
            ) : (
                <CiMenuBurger className="w-6 h-6" onClick={toggleMenuHandler}  />
            )}
        </div>
        {/* sidebar container */}
        {isMenuActive && 
            <div className="fixed inset-0 lg:static lg:h-full lg:w-full">
            {/* underlay */}
            <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={toggleMenuHandler} />
            {/* sidebar */}
            <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-white p-4 lg:static lg:w-full lg:p-6">
                <Link to="/">
                <img src={images.Logo} alt="logo" className="w-16" />
                </Link>
                <h4 className="mt-10 font-bold text-[#c7c7c7]">main menu</h4>
                {/* menu items */}
                <div className="mt-6 flex flex-col gap-y-[0.563rem]">
                    {MENU_ITEMS.map((item) =>
                        item.type === "link" ? (
                        <NavItem 
                        key={item.title}
                        title={item.title}
                        link={item.link}
                        icon={item.icon}
                        name={item.name}
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                        /> 
                         ) : ( 
                        <NavItemCollapse 
                        key={item.title}
                        title={item.title}
                        content={item.content}
                        icon={item.icon}
                        name={item.name}
                        activeNavName={activeNavName}
                        setActiveNavName={setActiveNavName}
                        />
                        )
                    )}


                </div>
            </div>
            </div>
        }



    </header>
    )

};

export default Header;