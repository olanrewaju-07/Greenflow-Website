import { useState } from "react";
import { Link } from "react-router-dom";
export default function BuyerSignup () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        paymentDetails: '',
      });
      const [isSignedUp, setIsSignedUp] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        setIsSignedUp(true);
      };
    return(
           <div className="flex flex-col mt-3 border border-green-950 rounded-xl p-5 shadow-xl bg-gray-100">
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
          </div>

          <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-green-950 ">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-green-950 ">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          </div>

        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-green-950 ">Delivery Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter delivery address"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-green-950 ">Payment Details</label>
            <input
              type="text"
              name="paymentDetails"
              value={formData.paymentDetails}
              onChange={handleChange}
              placeholder="Enter payment details"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          </div>
          <div className="flex flex-row items-center mt-6 gap-3">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span className="text-black opacity-80 text-[13px]">Agree to the terms and condition</span>
          </div>

          <button
            type="submit"
            className="w-full p-1 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700"
          >
            Sign Up
          </button>

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
    )
}