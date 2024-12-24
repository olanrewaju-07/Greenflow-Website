
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export default function HeroSignup () {
    const navigate = useNavigate();
    const [formData, setrFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })

    const [errors, setErrors] = useState({});
       const handleChange = (e) => {
        setrFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        setErrors({...errors, [e.target.name]: ""})
       };

       const validateForm = () => {
          const newError = {};
          if (!formData.name) newError.name = "name is required"
          if (!formData.email) newError.email = "email is required"
          if (!formData.password) newError.password = "password is requied"
          if (!formData.confirmPassword) newError.confirmPassword = "confirm password is required"
          if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            newError.confirmPassword ="password do not match!";
          }
             return newError;
       }

       const handleSubmit = (e) => {
        e.preventDefault();
         const validationErrors = validateForm();
         if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          toast.error("Please fix the errors in the form.");
          return;
        } 

        //saving signup data to local storage
        localStorage.setItem("user", JSON.stringify({email:formData.email, password:formData.password}));
        toast.success("signup successful");
        navigate("/login");

       }
    return (
         <div className="bg-[url('/assets/images/BgImage.svg')] bg-cover bg-center h-screen flex justify-center">
              {/* Logo */}
              <div className="flex mb-6 mobile:justify-center mobile:items-center">
               <img
                 src="/assets/icons/Greenflow-Green.png"
                 alt="Logo"
                 className="h-32 w-auto absolute top-2 left-0 mobile:top-0 mobile:left-0"
               />
             </div>
 
           <div className="w-full max-w-lg p-8">
            
             <h2 className="text-2xl font-semibold text-center mb-4">
               Create an Account
             </h2>
    
             <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col items-start mb-3">
                    <label className="text-[15px] font-semibold text-[#263238]">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name"
                      onChange={handleChange}
                      value={formData.name}
                      className={`w-full border rounded-lg ring-0 outline-0 px-2 py-1 bg-[#E6E7EB] placeholder:text-[14px] ${
                        errors.name ? "border-red-500" : "border-none"
                      }`}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="flex flex-col items-start mb-3">
                    <label className="text-[15px] font-semibold text-[#263238]">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email"
                      onChange={handleChange}
                      value={formData.email}
                      className={`w-full border rounded-lg ring-0 outline-0 px-2 py-1 bg-[#E6E7EB] placeholder:text-[14px] ${
                        errors.email ? "border-red-500" : "border-none"
                      }`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>

                <div className="flex flex-col items-start mb-3">
                    <label className="text-[15px] font-semibold text-[#263238]">Password</label>
                    <input 
                      type="password" 
                      name="password" 
                      onChange={handleChange}
                      value={formData.password}
                      placeholder="Enter your password"
                      className={`w-full border rounded-lg ring-0 outline-0 px-2 py-1 bg-[#E6E7EB] placeholder:text-[14px] ${
                        errors.password ? "border-red-500" : "border-none"
                      }`}
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                </div>

                <div className="flex flex-col items-start mb-3">
                    <label className="text-[15px] font-semibold text-[#263238]">Confirm password</label>
                    <input 
                      type="password" 
                      name="confirmPassword" 
                      onChange={handleChange}
                      value={formData.confirmPassword}
                      placeholder="Enter password again"
                      className={`w-full border rounded-lg ring-0 outline-0 px-2 py-1 bg-[#E6E7EB] placeholder:text-[14px] ${
                        errors.confirmPassword ? "border-red-500" : "border-none"
                      }`}
                    />
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                </div>

                <div className="mt-4 flex items-center">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          className="h-4 w-4 text-[#167206] border-gray-300 rounded"
                        />
                      <label className="ml-2 text-sm text-[#263238]">
                          I agree with the <span className="text-[#167206]">Privacy Policy</span> and <span className="text-[#167206]">Terms of Use</span>
                       </label>
                </div>
               <button
                 type="submit"
                 className="w-full mt-6 bg-[#167206] text-white py-1 px-2 rounded-lg hover:bg-[#167206] transition"
               >
                 Sign Up
               </button>
             </form>
     
             {/* Login Link */}
             <p className="mt-4 text-center text-sm text-gray-600">
               Already have an account?{" "}
               <Link to="/login" className="text-[#167206]">
                 Log in
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