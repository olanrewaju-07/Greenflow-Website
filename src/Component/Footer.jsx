import { FaFacebook } from "react-icons/fa"

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"
export default function Footer () {
    return (
        <div className="flex flex-col gap-3 bg-green-700">
            <div className="flex flex-row items-center justify-between mb-5 mobile:flex-col tablet:justify-center">
                <div className="flex flex-col gap-2 items-start mobile:items-center tablet:items-center">
                <img src="/assets/icons/Greenflow-White- Logo.png" alt="greenflow logo" className="h-40" />
                <span className="text-white text-[15px] w-[80%] mobile:w-full tablet:w-[80%] px-6 tablet:p-0 font-semibold opacity-80 mobile:text-center">Our mission is to deliver the freshest produce directly from local farmers to consumers, supported by refrigerated transport and real-time tracking to ensure quality and transparency.</span>
                </div>
                <div className="flex flex-row mt-10 mobile:grid mobile:grid-cols-2 mobile:ml-5 w-full tablet:grid tablet:grid-cols-2">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="text-white font-semibold text-[25px]">COMPANY</h2>
                        <ul className="flex flex-col items-start gap-2 text-white font-semibold text-[15px]">
                            <li className="cursor-pointer">About</li>
                            <li  className="cursor-pointer">Our Workflows</li>
                            <li  className="cursor-pointer">Contact Us</li>
                            <li  className="cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="text-white font-semibold text-[25px]">LEGAL</h2>
                        <ul className="flex flex-col items-start gap-2 text-white font-semibold text-[15px]  opacity-80">
                            <a href=""><li>Privacy Policy</li></a>
                           <a href=""><li>Terms & Condition</li></a>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="text-white font-semibold text-[25px]">Address</h2>
                        <span className="text-white font-semibold text-[15px] opacity-80 mobile:w-full">
                            Somewhere around Tanke, Ilorin, Kwara State.
                        </span>
                    </div>
                </div>
            </div>

            <hr className="opacity-40" />
            <div className="flex flex-row items-center justify-between p-4 mobile:flex-col mobile:gap-5">
                <span className="text-white opacity-80 mobile:order-2 mobile:text-[14px]">© 2024 GreenFlow Nexus. All Rights Reserved.</span>
                <div className="flex flex-col gap-2 items-center">
                    <h2 className="text-white font-semibold text-[15px]">Follow us on Social Media</h2>
                <div className="flex flex-row gap-4 text-white mr-5 text-[20px] order-1 opacity-80">
                    <a href="#"><FaFacebook  className="hover:text-green-900"/></a>
                    <a href="#"><FaTwitter className=" hover:text-green-900" /></a>
                    <a href="#"><FaLinkedin className=" hover:text-green-900" /></a>
                    <a href="#"><FaInstagram className=" hover:text-green-900"/> </a>
                </div>
                </div>
            </div>
        </div>
    )
}