import { useState } from "react";
import FarmerSignup from "../Component/FarmerSignup";
import BuyerSignup from "../Component/BuyerSignup";

export default function Signup() {
    const [activeForm, setActiveForm] = useState("farmer");

    return (
        <div className="relative flex flex-col lg:flex-row justify-between h-screen tablet:bg-green-950 mobile:h-fit">
            <div className="flex flex-col items-center lg:ml-12 gap-5 p-5 lg:p-0">
                <div className="text-center mt-5 lg:mt-10">
                    <h2 className="font-bold text-[17px] tablet:text-white tablet:text-[20px]">Get Started Now</h2>
                    <p className="text-[15px] text-green-900 tablet:text-white tablet:text-[17px]">
                        Reach your customers faster with us
                    </p>
                </div>

                <div className="flex flex-row bg-gray-200 rounded-md p-1 items-center lg:w-fit gap-3">
                    <button
                        onClick={() => setActiveForm("farmer")}
                        className={`${activeForm === "farmer" ? "bg-green-800 text-white" : "bg-white text-green-950"} rounded-md p-1 text-[15px] font-semibold`}
                    >
                        Join as Farmer
                    </button>
                    <button
                        onClick={() => setActiveForm("buyer")}
                        className={`${activeForm === "buyer" ? "bg-green-800 text-white" : "bg-white text-green-950"} rounded-md p-1 text-[15px] font-semibold`}
                    >
                        Join as Buyer
                    </button>
                </div>

                <div className="w-full">
                    {activeForm === "farmer" && <FarmerSignup />}
                    {activeForm === "buyer" && <BuyerSignup />}
                </div>
            </div>

            <img
                src="/assets/images/GreenLeaf.svg"
                alt="signup image"
                className="hidden lg:block w-1/2 h-fit object-cover rounded-l-2xl"
            />
        </div>
    );
}
