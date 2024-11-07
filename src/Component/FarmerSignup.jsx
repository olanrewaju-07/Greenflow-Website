import { useState } from "react";
import { perishableData } from "../../utils/Data";
import { Link } from "react-router-dom";
import { FaApple, FaGoogle } from "react-icons/fa6";

export default function FarmerSignup() {
    const [selectProduct, setSelectProduct] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        location: '',
        farmName: '',
    });

    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectProductChange = (event) => {
        setSelectProduct(event.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    // Form validation
    const validate = () => {
        const errors = {};

        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!formData.location) errors.location = 'Location is required';
        if (!formData.farmName) errors.farmName = 'Farm name is required';
        if (!isChecked) errors.checkbox = 'Please accept the terms and conditions';

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSignedUp(true);
        }
    };

    return (
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col mt-3 border border-green-950 rounded-xl p-5 mb-5 shadow-xl bg-gray-100 tablet:w-[90%] tablet:ml-8 mobile:w-full mobile:ml-0">
            {!isSignedUp ? (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="flex flex-col w-full">
                        <label className="text-sm font-semibold text-green-950">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                            placeholder="Enter your name here"
                            className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>

                    <div className="flex flex-row items-center gap-5 mt-3 mobile:flex-col">
                        <div className="flex flex-col w-full">
                            <label className="text-sm font-semibold text-green-950">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="yourname@gmail.com"
                                className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-sm font-semibold text-green-950">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                placeholder="Enter password"
                                className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-5 mt-3 mobile:flex-col">
                        <div className="flex flex-col w-full">
                            <label className="text-sm font-semibold text-green-950">Farm Name</label>
                            <input
                                type="text"
                                name="farmName"
                                onChange={handleChange}
                                value={formData.farmName}
                                placeholder="Farm name"
                                className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            {errors.farmName && <p className="text-red-500">{errors.farmName}</p>}
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-sm font-semibold text-green-950">Farm Location</label>
                            <input
                                type="text"
                                name="location"
                                onChange={handleChange}
                                value={formData.location}
                                placeholder="Your location"
                                className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            {errors.location && <p className="text-red-500">{errors.location}</p>}
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
                                className="p-1 mt-1 border rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" 
                            />
                        </div>
                    </div>

                    <div className="flex flex-row items-center mt-6 gap-3">
                        <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckboxChange} />
                        <span className="text-black opacity-80 text-[13px]">Agree to the terms and condition</span>
                    </div>

                    <Link to='/home' type="submit" className="flex items-center justify-center w-full border-none rounded-lg bg-green-600 p-1 text-[15px] text-white mt-4 hover:bg-green-700">
                        Register Farm
                    </Link>

                    <div className="flex flex-row justify-between items-center mt-4">
                        <span className="text-[12px] font-semibold">
                            Already have an account?{" "}
                            <Link to="/login" className="text-green-950">
                                Login here
                            </Link>
                        </span>
                    </div>
                </form>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-green-800">Welcome to GreenFlow!</h2>
                    <p className="mt-2 text-sm text-gray-700">You are now signed up. Start selling now!</p>
                    <button
                        onClick={() => (window.location.href = '/shop')}
                        className="mt-4 p-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                        Sell Products
                    </button>
                </div>
            )}
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-4">
            <hr  className="w-[200px] border border-green-950 tablet:border-white tablet:w-full" />
            <span className="tablet:text-white tablet:font-bold">Or</span>
            <hr  className="w-[200px] border border-green-950 tablet:border-white tablet:w-full"/>
          </div>

          <div className="flex flex-col gap-3 mobile:mb-10 tablet:items-center">
            <button className="w-full mobile:w-full tablet:w-[50%] border flex flex-row items-center justify-center gap-4 border-green-950 rounded-lg bg-none p-2 text-[15px] mt-4 hover:bg-green-100 tablet:border-none tablet:bg-white tablet:text-green-950"><FaGoogle /> Continue with Google</button>
            <button className="w-full mobile:w-full tablet:w-[50%] border flex flex-row items-center justify-center gap-4 border-green-950 rounded-lg bg-none p-2 text-[15px] mt-4 hover:bg-green-100 tablet:border-none tablet:bg-white tablet:text-green-950"><FaApple className="" /> Continue with Apple</button>
        </div>
        </div>
        </div>
    );
}
