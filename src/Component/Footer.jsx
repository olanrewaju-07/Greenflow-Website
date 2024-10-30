import { FaFacebook } from "react-icons/fa"
import greenflowlogo from "/assets/icons/GreenFlow-Logo-removebg-preview.png"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"
export default function Footer () {
    return (
        <div className="flex flex-col gap-3 bg-green-700">
            <div className="flex flex-row justify-between mb-5 mobile:flex-col">
                <img src={greenflowlogo} alt="greenflow logo" className="h-32" />
                <div className="flex flex-row gap-10 mt-10 mr-10 mobile:grid mobile:grid-cols-2 mobile:ml-10">
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-white font-semibold text-[25px]">COMPANY</h2>
                        <ul className="flex flex-col items-start gap-2 text-white font-semibold text-[15px]">
                            <li className="cursor-pointer">About</li>
                            <li  className="cursor-pointer">Our Workflows</li>
                            <li  className="cursor-pointer">Contact Us</li>
                            <li  className="cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-white font-semibold text-[25px]">FOLLOW US</h2>
                        <ul className="flex flex-col items-start gap-2 text-white font-semibold text-[15px] opacity-80">
                            <a href="#"><li>Instagram</li></a>
                            <a href="#"><li>Twitter</li></a>
                            <a href="#"><li>Linkedin</li> </a>
                            <a href="#"><li>Facebook</li></a>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-white font-semibold text-[25px]">LEGAL</h2>
                        <ul className="flex flex-col items-start gap-2 text-white font-semibold text-[15px]  opacity-80">
                            <a href=""><li>Privacy Policy</li></a>
                           <a href=""><li>Terms & Condition</li></a>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-white font-semibold text-[25px]">DOWNLOAD</h2>
                        <ul className="flex flex-col items-start gap-2 text-white font-semibold text-[15px]  opacity-80">
                             <a href=""><li>IOS</li></a>
                             <a href=""><li>Android</li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="opacity-40" />
            <div className="flex flex-row items-center justify-between p-4 mobile:flex-col mobile:gap-5">
                <span className="text-white opacity-80 mobile:order-2 mobile:text-[14px]">© 2024 GreenFlow Nexus. All Rights Reserved.</span>
                <div className="flex flex-row gap-4 text-white mr-5 text-[20px] order-1">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /> </a>
                </div>
            </div>
        </div>
    )
}