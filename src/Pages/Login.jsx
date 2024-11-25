import { useState } from "react"
import FarmerLogin from "../Component/FarmerLogin";
import BuyerLogin from "../Component/BuyerLogin";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


export default function Login () {
    const [ activeForm, setActiveForm] = useState("farmer");
    return (
        <div className="relative flex flex-col lg:flex-row gap-20 h-screen  tablet:bg-green-950 tablet:h-screen">
               <Link to="/landingpage" className="self-start">
  <FaArrowLeft className="text-white text-4xl absolute top-5 left-5 z-30"/>
</Link> 
            <img src="/assets/images/GreenLeaf.svg" alt="signup image" className="w-1/2 h-screen object-cover rounded-l-2xl tablet:hidden" />
            <div className="flex flex-col items-center  lg:ml-12 gap-5 p-5 lg:p-0">
                <div className="text-center mt-4 lg:mt-10">
                <h2 className="font-bold text-[17px]  tablet:text-white tablet:text-[20px]">Welcome back!</h2>
          <p className="text-[15px] text-green-900 tablet:text-white tablet:text-[17px]">
            Enter your credential to access your account
          </p>
        </div>

        <div className="flex flex-row bg-gray-200 rounded-md p-1 items-center lg:w-fit gap-3">
            <button onClick={() => setActiveForm("farmer")}
            className={`${activeForm === "farmer" ? "bg-green-800 text-white": "bg-white text-green-950"} rounded-md p-1 text-[15px] font-semibold`}>Login as GreenFlower</button>

            <button onClick={() => setActiveForm("buyer")}
            className={`${activeForm === "buyer"  ? "bg-green-800 text-white" : "bg-white text-green-950"} rounded-md p-1 text-[15px] font-semibold`}> Login as Buyer</button>
        </div>
        <div className="w-full">
            {activeForm === "farmer" && <FarmerLogin />}
            {activeForm === "buyer"  && <BuyerLogin/>}
        </div>
               
             </div>
        </div>
    )
}