import { Link } from "react-router-dom"
import backgroundImage from "/assets/images/IMG-20241026-WA0001.jpg"
export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center w-full h-screen" style={{backgroundImage:`url(${backgroundImage})`}}>
            {/* Overlay green color */}
       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
       <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold md:text-5xl">
            Harvest Fresh,Deliver Fresh: Connecting Farmers and Buyers for a Sustainable Future.
          </h1>
          <p className="mt-4 text-lg md:text-2xl mobile:hidden">
            Get the best produce directly from local farmers,with refrigerated transport and real-time tracking.
          </p>
          <div className="flex flex-row items-start justify-center gap-10">
          <Link to="signup" className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
            Sign Up
          </Link>
          <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
            Learn More
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}