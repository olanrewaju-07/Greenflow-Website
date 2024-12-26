import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function HeroLogin () {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //get the user data from local storage
    const userData = JSON.parse(localStorage.getItem("user"));
      if (
        userData &&
        userData.email === credential.email &&
        userData.password === credential.password
      ) {
        toast.success("log in successful");
        navigate("/home");
      } else {
        toast.error("Invalid email and password");
      }
  }
    return (
        <div className="bg-[url('/assets/images/BgImage.svg')] bg-cover bg-center h-screen flex flex-col items-center justify-center mobile:flex-col ">
                     {/* Logo */}
                     <div className="flex mb-6">
                      <img
                        src="/assets/icons/Greenflow-Green.png"
                        alt="Logo"
                        className="h-32 w-auto absolute top-2 left-0 mobile:relative"
                      />
                    </div>
        
                  <div className="w-full max-w-lg px-5 mobile:px-4 mt-10 mobile:mt-0 mobile:p-0 ">
                    {/* Form Title */}
                    <h2 className="text-2xl font-semibold text-center mb-4">
                      Welcome Back to GreenFlow.
                    </h2>
            
                    {/* Input Fields */}
                    <form className="w-full" onSubmit={handleSubmit}>
                       <div className="flex flex-col items-start mb-3">
                           <label className="text-[15px] font-semibold text-[#263238]">Email</label>
                           <input 
                             type="email" 
                             name="email" 
                             placeholder="Enter your email"
                             onChange={handleChange}
                             value={credential.email}
                             className="w-full border-none rounded-lg ring-0 outline-0 px-2 py-1 placeholder:px-2 bg-[#E6E7EB] placeholder:text-[14px]"
                           />
                       </div>
       
                       <div className="flex flex-col items-start mb-3">
                           <label className="text-[15px] font-semibold text-[#263238]">Password</label>
                           <input 
                             type="password" 
                             name="password" 
                             placeholder="Enter your password"
                             onChange={handleChange}
                             value={credential.password}
                             className="w-full border-none rounded-lg ring-0 outline-0 px-2 py-1 placeholder:px-2 bg-[#E6E7EB] placeholder:text-[14px]"
                           />
                       </div>
                      <Link to="/home"
                        type="submit"
                        className="w-full mt-6 mb-5 bg-[#167206] text-white py-1  px-2 flex items-center justify-center rounded-lg hover:bg-[#167206] transition"
                      >
                        Sign Up
                      </Link>

                      <Link to="/forgetpassword" className="text-[15px] text-red-700">Forget Password </Link>
                    </form>
            
                    {/* Login Link */}
                    <p className="mt-16 text-center text-sm text-gray-600">
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
                    <div className="flex space-x-4 mobile:flex-col mobile:space-x-0 mobile:space-y-4">
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