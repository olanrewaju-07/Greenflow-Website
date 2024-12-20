import { useRef } from "react";
import { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouterLink } from "react-router-dom";


export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
   }, []);
   const menuRef = useRef(null);
   const buttonRef =useRef(null);


   const toggleMenu = () =>{
    setIsOpen(!isOpen);
   }

   const closeMenu = () => {
    setIsOpen(false);
   }

  return (
    <div className= {`fixed w-full  h-20 z-50 duration-300 ${isScrolled ? 'bg-green-500' : 'bg-white'  }`} >
      <div className="flex flex-wrap justify-between items-center">
        <Link to="/landingpage" className="flex items-center space-x-3 rtl:space-x-reverse">
         <img src={ isScrolled ? "/assets/icons/Greenflow-White- Logo.png" : "./assets/icons/GreenFlow-Logo-removebg-preview.png"} alt="GreenFlow Logo" className="h-24"/>
        </Link>
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

        <ul className="font-semibold flex flex-col mr-5 border rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse  lg:border-0 tablet:bg-white">
          <ScrollLink to="hero" offset={10} smooth={true} duration={500}
             onClick={closeMenu}
             className={`block py-2 px-4 text-md rounded  mobile:hover:text-green-950  lg:border-0 lg:p-0 cursor-pointer ${isScrolled? 'text-white hover:text-green-950 tablet:text-green-800' : 'text-black hover:text-green-800 tablet:text-green-800'} `}>
              Home
          </ScrollLink>
          <ScrollLink to="product" offset={-110} smooth={true} duration={500}
             onClick={closeMenu}
             className={`block py-2 px-4 text-md rounded  mobile:hover:text-green-950 lg:border-0 lg:p-0 cursor-pointer ${isScrolled? 'text-white hover:text-green-950 tablet:text-green-800'  : 'text-black hover:text-green-800 tablet:text-green-800'} `}>
              Our Workflows
          </ScrollLink>
          <ScrollLink to="about" offset={-110} smooth={true} duration={500}
             onClick={closeMenu}
             className={`block py-2 px-4 text-md rounded  mobile:hover:text-green-950 lg:border-0 lg:p-0 cursor-pointer ${isScrolled? 'text-white hover:text-green-950 tablet:text-green-800' : 'text-black hover:text-green-800 tablet:text-green-800'} `}>
              About us
          </ScrollLink>
          <ScrollLink to="survey" offset={-100} smooth={true} duration={500}
             onClick={closeMenu}
             className={`block py-2 px-4 text-md rounded mobile:hover:text-green-950 lg:border-0 lg:p-0 cursor-pointer ${isScrolled? 'text-white hover:text-green-950 tablet:text-green-800' : 'text-black hover:text-green-800 tablet:text-green-800'} `}>
               F.A.Qs
          </ScrollLink>
          <RouterLink to="/signup" offset={200} smooth={true} duration={500}
           onClick={closeMenu}
             className={`block py-2 px-4 text-md rounded mobile:hover:text-green-950   lg:border-0 lg:p-0 cursor-pointer ${isScrolled? 'text-white hover:text-green-950 tablet:text-green-800' : 'text-black hover:text-green-800 tablet:text-green-800'} `}>
              Register
          </RouterLink>
          <RouterLink to="login"
             onClick={closeMenu}
             className={`block py-2 px-4 text-md rounded mobile:hover:text-green-950  lg:border-0 lg:p-0 cursor-pointer ${isScrolled? 'text-white hover:text-green-950 tablet:text-green-800' : 'text-black hover:text-green-800 tablet:text-green-800'} `}>
              Login
          </RouterLink>
          <RouterLink to="/farmerRegister"
            onClick={closeMenu}
            className="hover:bg-green-800 bg-green-700  text-white py-2 px-6 rounded-lg block text-md sm:-mt-2 my-2 cursor-pointer transition delay-100 hover:-translate-y-1 ">
              Be a GreenFlower
          </RouterLink>
        </ul>
       </div>
    </div>
    </div>
  )
}