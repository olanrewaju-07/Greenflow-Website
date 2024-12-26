import { useState, useRef } from "react";
import { FaBars, FaCog, FaHome, FaSearch, FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBell, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AuthSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the sidebar when a link is clicked
  const handleLinkClick = () => {
    if (window.innerWidth <= 1024) { 
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen bg-[#167206] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:relative lg:translate-x-0 z-40`}
      >
        <div className="w-full h-full">
          <button
            onClick={toggleSidebar}
            className={`absolute top-5 right-1 lg:hidden z-[1000] text-white ${
              !isOpen ? "hidden" : " "
            }`}
          >
            <FaTimes />
          </button>

          <div className="w-full text-white h-full flex flex-col items-center">
            <div className="mb-3 mx-4">
              <img
                src="/assets/icons/Greenflow-White- Logo.png"
                className="h-20 w-20 mobile:h-10 mobile:w-10 tablet:40"
                alt="Greenflow logo"
              />
            </div>

            <nav className="border-[#263238] border-2 rounded-md">
              <ul className="py-4 ml-3 px-4 flex flex-col gap-5 text-white">
                <Link
                  to="/home"
                  onClick={handleLinkClick} 
                  className="flex flex-row items-center gap-2 px-1 py-1 hover:bg-[#263238] hover:text-white hover:border-l-4 border-white font-semibold"
                >
                  <FaHome />
                  Home
                </Link>

                <Link
                  to="/browseproduct"
                  onClick={handleLinkClick} 
                  className="flex flex-row items-center gap-2 px-1 py-1 hover:bg-[#263238] hover:text-white hover:border-l-4 border-white font-semibold"
                >
                  <FaSearch />
                  Browse Product
                </Link>

                <Link
                  to="/cart"
                  onClick={handleLinkClick}  
                  className="flex flex-row items-center gap-2 px-1 py-1 hover:bg-[#263238] hover:text-white hover:border-l-4 border-white font-semibold"
                >
                  <FaCartShopping />
                  Cart
                </Link>

                <Link
                  to="/myorder"
                  onClick={handleLinkClick} 
                  className="flex flex-row items-center gap-2 px-1 py-1 hover:bg-[#263238] hover:text-white hover:border-l-4 border-white font-semibold"
                >
                  <FaBagShopping />
                  My Order
                </Link>

                <Link
                  to="/notification"
                  onClick={handleLinkClick} 
                  className="flex flex-row items-center gap-2 px-1 py-1 hover:bg-[#263238] hover:text-white hover:border-l-4 border-white font-semibold"
                >
                  <FaBell />
                  Notification
                </Link>

                <Link
                  to="/setting"
                  onClick={handleLinkClick}
                  className="flex flex-row items-center gap-2 px-1 py-1 hover:bg-[#263238] hover:text-white hover:border-l-4 border-white font-semibold"
                >
                  <FaCog />
                  Setting
                </Link>
              </ul>
            </nav>

            <div className="relative mt-5 px-3">
              <img src="/assets/images/Rectangle 109.svg" alt="" />
              <div className="absolute inset-0 bg-[#167206] bg-opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className={`absolute top-4 left-4 text-[25px] text-[#167206] lg:hidden z-50 bg-customPurple p-1 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <FaBars />
      </button>
    </div>
  );
}
