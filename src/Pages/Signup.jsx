import { useState } from "react"
import FarmerSignup from "../Component/FarmerSignup";
import BuyerSignup from "../Component/BuyerSignup";

export default function Signup () {
    const [ activeForm, setActiveForm] = useState("farmer");
    return (
        <div className="relative flex flex-row justify-between h-screen">
            <div className="flex flex-col items-center ml-12 gap-5">
                <div className="text-center mt-4">
                <h2 className="font-bold text-[17px]"> Get Started Now</h2>
          <p className="text-[15px] text-green-900">
            Reach your customers faster, With us
          </p>
        </div>

        <div className="flex flex-row bg-gray-200 rounded-md p-1 items-center w-fit gap-3">
            <button onClick={() => setActiveForm("farmer")}
            className={`${activeForm === "farmer" ? "bg-green-800 text-white": "bg-white text-green-950"} rounded-md p-1 text-[15px] font-semibold`}>Join as Farmer</button>

            <button onClick={() => setActiveForm("buyer")}
            className={`${activeForm === "buyer"  ? "bg-green-800 text-white" : "bg-white text-green-950"} rounded-md p-1 text-[15px] font-semibold`}> Join as Buyer</button>
        </div>
        <div className="w-full">
            {activeForm === "farmer" && <FarmerSignup />}
            {activeForm === "buyer"  && <BuyerSignup />}
        </div>
               
             </div>
             <img src="/assets/images/GreenLeaf.svg" alt="signup image" className="w-1/2 h-full object-cover rounded-l-2xl mobile:hidden" />
        </div>
    )
}