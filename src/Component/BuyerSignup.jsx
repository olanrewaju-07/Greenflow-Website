import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa6";
export default function BuyerSignup () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        paymentDetails: '',
      });
    

      const [errors, setErrors] = useState({});
      const [isSignedUp, setIsSignedUp] = useState(false);
      const [isChecked, setIsChecked] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleCheckboxChange = (e) => { 
        setIsChecked(e.target.checked);
      };
      
       // Function to validate form
       const validate = () => {
        const errors = {};

        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) { errors.email = 'Email is required';}
        else if  (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email is invalid';
        }
         if (!formData.password) {errors.password = 'Password is required';}
         else if (formData.password.length < 6) {
          errors.password = 'password must be at least 6 characters';
         }

         if (!formData.address) errors.address = 'Address is reqiuired';
         if (!formData.paymentDetails) errors.paymentDetails = 'Payment details is required';
         if (!isChecked) errors.checkbox = 'Please accept the terms and conditions';

         setErrors(errors);
         return Object.keys(errors).length === 0;
        };
       
       // Function to handle form submission
       const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          setIsSignedUp(true);
        }
      };

    return(
      <div className="flex flex-col gap-3 mt-5">
           <div className="flex flex-col mt-3 border border-green-950 rounded-xl p-5 shadow-xl bg-gray-100 tablet:w-[90%] tablet:ml-8 mobile:w-full mobile:ml-0">
             {!isSignedUp ? (
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-green-950">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="flex flex-row items-center gap-3 mobile:flex-col">
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950 ">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950 ">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
          </div>
          </div>

        <div className="flex flex-row items-center gap-3 mobile:flex-col">
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950 ">Delivery Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.address && <p className="text-red-600 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950 ">Payment Details</label>
            <input
              type="text"
              name="paymentDetails"
              value={formData.paymentDetails}
              onChange={handleChange}
              placeholder="Enter payment details"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.paymentDetails && <p className="text-red-600 text-xs mt-1">{errors.paymentDetails}</p>}
          </div>
          </div>
          
          <div className="flex flex-row items-center mt-2 gap-3">
            <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckboxChange} />
            <span className="text-black opacity-80 text-[13px]">Agree to the terms and condition</span>
            {errors.checkbox && <p className="text-red-600 text-xs mt-1">{errors.checkbox}</p>}
          </div>

          <Link to='/home'
            type="submit"
            className="flex items-center justify-center w-full p-1 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700"
          >
            Sign up
          </Link>

          <div className="flex flex-row justify-between items-center mt-4">
          <span className="text-[12px] font-semibold">
            Already have an account?{" "}
            < Link to="/login" className="text-green-950">
              Login here
            </Link>
          </span>
        </div>

        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-800">Welcome to GreenFlow!</h2>
          <p className="mt-2 text-sm text-gray-700">You are now signed up. Start shopping now!</p>
          <button
            onClick={() => window.location.href = '/shop'}
            className="mt-4 p-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Shop Products
          </button>
        </div>
      )}                                       
           </div>
           <div className="flex flex-col">
          <div className="flex flex-row items-center gap-4 mt-2">
            <hr  className="w-[200px] border border-green-950 tablet:border-white tablet:w-full" />
            <span className="tablet:text-white mobile:font-bold tablet:border-white">Or</span>
            <hr  className="w-[200px] border border-green-950 tablet:border-white tablet:w-full"/>
          </div>

          <div className="flex flex-row gap-3 tablet:items-center">
            <button className="w-full mobile:w-full tablet:w-[50%] border flex flex-row items-center justify-center gap-4 border-green-950 rounded-lg bg-none p-2 text-[15px] mt-4 hover:bg-green-100 tablet:border-none tablet:bg-white tablet:text-green-950"><FaGoogle /> Continue with Google</button>
            <button className="w-full mobile:w-full tablet:w-[50%]  border flex flex-row items-center justify-center gap-4 border-green-950 rounded-lg bg-none p-2 text-[15px] mt-4 hover:bg-green-100 tablet:border-none tablet:bg-white tablet:text-green-950"><FaApple className="" /> Continue with Apple</button>
        </div>
        </div> 
           </div>
    )
}