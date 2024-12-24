
import playStore from "/assets/icons/get-on-playstore.svg"
import appleStore from "/assets/icons/Download-on-appstore.svg"
import { FaCircleCheck } from "react-icons/fa6"
export default function Download () {
    return (
        <div className="flex items-center justify-center mt-10 mobile:p-4">
        <div className="flex flex-row bg-[#167206] justify-between gap-5 p-6 rounded-xl mobile:flex-col mobile:items-center">
            <img src="/assets/images/mobileImage.png" alt="mobile app" className="h-56 mobile:h-56 mobile:w-28 transform -rotate-12" />
            <div className="flex flex-col items-start gap-4 ml-10">
                <h2 className="text-white font-semibold text-3xl mobile:text-[23px]">Get complete experience</h2>
                <p className="text-white text-[13px] w-[75%] mobile:text-[16px] mobile:w-full">Download our mobile app and enjoy convenience like never before.</p>
                <div className="grid grid-cols-2 items-center gap-3 mobile:flex mobile:flex-col mobile:items-start">
                    <div className="flex flex-row gap-2 items-center text-white text-[17px] bg-[#7ba07b] px-2 py-1 rounded-lg w-fit">
                        <FaCircleCheck className="text-green-950" />
                        <span>Better Location</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-white text-[17px] bg-[#7ba07b] px-2 py-1 rounded-lg w-fit">
                        <FaCircleCheck className="text-green-950" />
                        <span>Easy to Find, Order and Track.</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-white text-[17px] bg-[#7ba07b] px-2 py-1 rounded-lg w-fit">
                        <FaCircleCheck className="text-green-950" />
                        <span>Access on-the-go</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-white text-[17px] bg-[#7ba07b] px-2 py-1 rounded-lg w-fit">
                        <FaCircleCheck className="text-green-950" />
                        <span>Easy sign-in</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-white text-[17px] bg-[#7ba07b] px-2 py-1 rounded-lg w-fit">
                        <FaCircleCheck className="text-green-950" />
                        <span>Users friendly</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-20 gap-5 mobile:flex-row">
                <a href="#"><img src={playStore} alt="playstore" /></a>
              <a href="#"><img src={appleStore} alt="applestore" /></a> 
            </div>
        </div>
        </div>
    )
}