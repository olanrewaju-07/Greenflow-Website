import { Link } from "react-router-dom";

export default function Mission () {
  return (
    <div className="bg-[#FF66001A] w-full h-auto py-20 px-5">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 m-auto max-w-4xl">
        <div className="group relative justify-center overflow-hidden rounded-[25px] h-[550px] sm:w-5/5 lg:w-450">
          <div className="h-full">
            <img
              src="/assets/images/Farmer.svg"
              alt="Buyer image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#084DA6] to-[#0A0601] opacity-70"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-9 translate-y-[15%] sm:text-center">
            <h1 className="text-white md:text-2xl sm:text-3xl font-extrabold mb-4 overflow-hidden lg:text-left">
              Buy Quality Produce.{" "}
            </h1>
            <p className="text-md mb-6 text-white overflow-hidden lg:text-left">
            We make it easy to access fresh agricultural products. Connect with trusted farmers for quality produce in any quantity.
            Our reliable service ensures fresh products from order to delivery every time.
            </p>

            <Link to="/login" className="bg-[#167206] w-[200px] text-white font-semibold py-2 px-4 rounded-lg inline-block text-md cursor-pointer sm:mx-0 mb-10  lg:self-start">
              Produce Access
            </Link>
          </div>
        </div>

       
        <div className="group relative justify-center overflow-hidden rounded-[25px] h-[550px] sm:w-5/5 lg:w-450">
          <div className="h-full">
            <img
              src="/assets/images/Buyer.svg"
              alt="Farmer image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#167206] to-[#0A0601] opacity-70"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-9 translate-y-[15%] sm:text-center">
            <p className="text-md  md:text-2xl sm:text-3xl font-extrabold -mb-1 text-white overflow-hidden lg:text-left lg:mb-1">
              Are you a Farmer?
            </p>
            <h1 className="text-white  text-md font-bold mb-4 overflow-hidden lg:text-left">
              Get Customers{" "}
            </h1>
            <p className="text-md mb-6 text-white overflow-hidden  lg:text-left"> 
            We reduce post-harvest loss and increase profits with cold storage vans, cutting losses by up to 60%.
            Let us handle logistics so you can focus on growing your business. Join us and farm smarter.
            </p>

            <Link to="/signup" className="bg-[#084DA6] w-[200px] text-white font-semibold py-2 px-4 rounded-lg inline-block text-md cursor-pointer sm:mx-0 mb-10 lg:self-start">
              Be a Smater Farmer
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
