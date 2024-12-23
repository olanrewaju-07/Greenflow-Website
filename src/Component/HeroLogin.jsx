import { Link } from "react-router-dom";

export default function HeroLogin () {
    return (
        <div className="bg-[url('/assets/images/BgImage.svg')] bg-cover bg-center h-screen flex justify-center">
                     {/* Logo */}
                     <div className="flex mb-6">
                      <img
                        src="/assets/icons/Greenflow-Green.png"
                        alt="Logo"
                        className="h-32 w-auto absolute top-2 left-0"
                      />
                    </div>
        
                  <div className="w-full max-w-lg p-8">
                    {/* Form Title */}
                    <h2 className="text-2xl font-semibold text-center mb-4">
                      Create an Account
                    </h2>
            
                    {/* Input Fields */}
                    <form className="w-full">
                       <div className="flex flex-col items-start mb-3">
                           <label className="text-[15px] font-semibold text-[#263238]">Email</label>
                           <input 
                             type="email" 
                             name="email" 
                             id="email" 
                             placeholder="Enter your email"
                             className="w-full border-none rounded-lg ring-0 outline-0 px-2 py-1 placeholder:px-2 bg-[#E6E7EB] placeholder:text-[14px]"
                           />
                       </div>
       
                       <div className="flex flex-col items-start mb-3">
                           <label className="text-[15px] font-semibold text-[#263238]">Password</label>
                           <input 
                             type="password" 
                             name="password" 
                             id="password" 
                             placeholder="Enter your password"
                             className="w-full border-none rounded-lg ring-0 outline-0 px-2 py-1 placeholder:px-2 bg-[#E6E7EB] placeholder:text-[14px]"
                           />
                       </div>
                      <Link to="/home"
                        type="submit"
                        className="w-full mt-6 mb-5 bg-[#167206] text-white py-1 px-2 rounded-lg hover:bg-[#167206] transition"
                      >
                        Sign Up
                      </Link>

                      <Link to="/forgetpassword" className="absolute right-[450px] top-[280px] text-[15px] text-red-700">Forget Password </Link>
                    </form>
            
                    {/* Login Link */}
                    <p className="mt-8 text-center text-sm text-gray-600">
                      Dont have an account?{" "}
                      <Link to="/signup" className="text-[#167206]">
                        Sign up
                      </Link>
                    </p>
            
                    {/* Or Section */}
                    <div className="flex items-center my-4">
                      <div className="w-full h-px bg-gray-300"></div>
                      <p className="mx-3 text-gray-500">OR</p>
                      <div className="w-full h-px bg-gray-300"></div>
                    </div>
            
                    {/* Social Media Buttons */}
                    <div className="flex space-x-4">
                      <button className="flex-1 flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 gap-2">
                      Continue with 
                        <img
                          src="/assets/images/Goggle.svg"
                          alt="Google"
                          className="h-5 w-5 mr-2"
                        />
                      </button>
       
                      <button className="flex-1 flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 gap-2">
                      Continue with
                        <img
                          src="/assets/images/Facebook.svg"
                          alt="Facebook"
                          className="h-5 w-5 mr-2"
                        />
                      </button>
       
                    </div>
                  </div>
                </div>
    )
}