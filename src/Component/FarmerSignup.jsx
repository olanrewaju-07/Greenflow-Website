import { useState } from "react"
import { perishableData } from "../../utils/Data"
import { Link } from "react-router-dom";
export default function FarmerSignup () {
    const [selectProduct, setSelectProduct] = useState("");

    const handleSelectProductChange = (event) => {
        setSelectProduct(event.target.value);
    }
    return(
        <div className="flex flex-col mt-3 border border-green-950 rounded-xl p-5 shadow-xl bg-gray-100">
            <form className="w-full space-y-4">
               <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
         
          <div className="flex flex-row items-center gap-5 mt-3">
               <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950">Email</label>
            <input
              type="email"
              placeholder="yourname@gmail.com"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          </div>
          <div className="flex flex-row items-center gap-5 mt-3">
               <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950">Farm Name</label>
            <input
              type="text"
              placeholder="Farm name"
             className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[15px] font-semibold text-green-950">Farm Location</label>
            <input
              type="text"
              placeholder="Your location"
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mt-3 items-center">
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950">Farm Product</label>
            <select
              value={selectProduct}
              onChange={handleSelectProductChange}
              className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Select a Product</option>
              {perishableData.map((product, index) => (
                <option key={index} value={product}>
                  {product}
                </option>
              ))}
            </select>
            </div>
            <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-green-950">Availability Date</label>
            <input 
            type="date"
            className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
            </div>
          </div>
          <div className="flex flex-row items-center mt-6 gap-3">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span className="text-black opacity-80 text-[13px]">Agree to the terms and condition</span>
          </div>

          <button type="submit"  className="w-full border-none  rounded-lg bg-green-600 p-1 text-[15px] text-white mt-4 hover:bg-green-700">Register Farm</button>

          <div className="flex flex-row justify-between items-center mt-4">
          <span className="text-[12px] font-semibold">
            Already have an account?{" "}
            < Link to="/login" className="text-green-950">
              Login here
            </Link>
          </span>
        </div>
            </form>
            

        </div>
    )
}