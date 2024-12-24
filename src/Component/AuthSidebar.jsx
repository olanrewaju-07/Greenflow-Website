import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


export default function AuthSidebar () {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:fixed z-30">
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-[100vh] mobile:h-[100vh] w-64 pt-2 bg-[#167206] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:relative lg:translate-x-0 z-40`}
      >
        <div className="w-full h-full">
          <button
            onClick={toggleSidebar}
            className={`absolute top-5 text-[20px] right-1 lg:hidden mx-4 mt-3 z-50 text-white ${
              !isOpen ? "hidden" : " "
            }`}
          >
            <FaTimes />
          </button>
          <div className="w-full text-white h-full">
            <div className="mb-3 mx-4">
              <img
                src="/assets/icons/Greenflow-White- Logo.png"
                className="h-20 w-20 mobile:h-5 mobile:w-40 tablet:40 mt-6"
                alt="Greenflow logo"
              />
            </div>
            <div className="flex flex-col justify-between h-[75vh]">
              <nav className="flex flex-col mt-6">

                <div className="relative">
                  <Link
                    to="/home"
                    className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple"
                  >

                    <span className="text-white text-md tracking-tighter">
                      Home
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <Link
                    to="location"
                    className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple"
                  >
                    
                    <span className="text-white text-md tracking-tighter">
                      Location
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <Link
                    to="browseProduct"
                    className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple"
                  >
                    
                    <span className="text-white text-md tracking-tighter">
                      Browse Product
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <Link className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple">

                    <span className="text-white text-md tracking-tighter">
                      My Order
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <Link
                    to="/contact"
                    className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple"
                  >

                    <span className="text-white text-md tracking-tighter">
                      Carts
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <Link
                    to="/notification"
                    className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple"
                  >
                    <span className="text-white text-md tracking-tighter">
                      Make Booking
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <Link
                    to="/setting"
                    className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple"
                  >
                    <span className="text-white text-md tracking-tighter">
                      Notification
                    </span>
                  </Link>
                </div>

                <div className="relative">
                  <Link
                    to="/artizanprofile"
                    className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple"
                  >
                    <span className="text-white text-md tracking-tighter">
                      Setting
                    </span>
                  </Link>
                </div>


                <div className="relative">
                  <Link className="relative flex flex-row gap-5 pl-4 py-2 hover:bg-lightPurple">

                    <span className="text-white text-md tracking-tighter">
                      Need Help?
                      <span className="text-md text-white opacity-70 pl-1">
                        Talk to us
                      </span>
                    </span>
                  </Link>
                </div>
                
              </nav>
              <div className="flex flex-col w-[80%] ml-5 mt-28 gap-2">
                <div className="flex flex-row gap-5 items-center">
                  <span className="text-xs">Privacy Policy</span>|
                  <span className="text-xs">Terms of Services</span>
                </div>
                <div className="flex items-center justify-center flex-col gap-5 ">
                  <span className="text-xs">
                    ©2024 GreenFlow Inc. | All rights reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 left-4 text-[25px] text-white lg:hidden z-50 bg-customPurple p-1 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <FaBars />
      </button>
    </div>
  );
}
