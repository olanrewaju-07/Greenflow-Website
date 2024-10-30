import { useRef } from "react";
import { useState } from "react"

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef(null);
   const buttonRef =useRef(null);


   const toggleMenu = () =>{
    setIsOpen(!isOpen);
   }

   const closeMenu = () => {
    setIsOpen(false);
   }

  return (
    <div className="fixed w-full bg-white z-50">
      <div className="flex flex-wrap justify-between items-center">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
         <img src="./assets/icons/GreenFlow-Logo-removebg-preview.png" alt="GreenFlow Logo" className="h-32"/>
        </a>
        <button
         ref={buttonRef}
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center mr-5 p-2 w-10 h-10 justify-center text-sm text-green-800 rounded-sm lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-green-950"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-4 h-4 sm:h-5 sm:w-5 md:w-6 md:h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
     
       <div ref={menuRef} className={`w-full lg:block lg:w-auto  ${
        isOpen ? "block" : "hidden"
       }`}>

        <ul className="font-semibold flex flex-col mr-5 lg:p-0 mt-4 border bg-white rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
          <li>
            <a 
             href="#"
             onClick={closeMenu}
             className="block py-2 px-4 text-md rounded hover:bg-green-800 mobile:hover:text-white lg:hover:text-green-800 lg:hover:bg-white lg:border-0 lg:p-0">
              Home
            </a>
          </li>
          <li>
            <a 
             href="#"
             onClick={closeMenu}
             className="block py-2 px-4 text-md rounded hover:bg-green-800 mobile:hover:text-white lg:hover:text-green-800 lg:hover:bg-white lg:border-0 lg:p-0">
              Our Workflows
            </a>
          </li>
          <li>
            <a 
             href="#"
             onClick={closeMenu}
             className="block py-2 px-4 text-md rounded hover:bg-green-800 mobile:hover:text-white lg:hover:text-green-800 lg:hover:bg-white lg:border-0 lg:p-0">
               F.A.Qs
            </a>
          </li>
          <li>
            <a 
             href="#"
             onClick={closeMenu}
             className="block py-2 px-4 text-md rounded hover:bg-green-800 mobile:hover:text-white lg:hover:text-green-800 lg:hover:bg-white lg:border-0 lg:p-0">
              Contact Us
            </a>
          </li>
          <li>
            <a 
             href="#"
             onClick={closeMenu}
             className="block py-2 px-4 text-md rounded hover:bg-green-800 mobile:hover:text-white lg:hover:text-green-800 lg:hover:bg-white lg:border-0 lg:p-0">
              Login
            </a>
          </li>
          <li>
            <a href="#"
            onClick={closeMenu}
            className="bg-green-800 text-white py-2 px-6 rounded-lg block text-md sm:-mt-2 my-2 cursor-pointer">
              Join GreenFlow
            </a>
          </li>
        </ul>
       </div>
    </div>
    </div>
  )
}