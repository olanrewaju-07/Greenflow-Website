import { useState } from "react";
import AuthHeader from "./AuthHeader";
import {useToast} from "./ToastContainer"
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function FarmerRegister () {
    const [selectedImage, setSelectedImage] = useState(null);
    const addToast = useToast();
    const [formData, setFormData] = useState({
        farmName: '',
        state: '',
        city: '',
        website: '',
        socialLinks: '',
        farmProduct: '',
      });

      const validateForm = () => {
        const requireField = ['farmName', 'state' , 'city', 'website' ,'socialLinks', 'farmProduct']
        for (let field of requireField) {
          if (!formData[field]) {
            addToast(`${field} is required`, "error");
            return false;
          }
        }
        return true;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!validateForm()) return;
    
        const data = {
          ...formData,
          selectedImage,
        };
    
        console.log(data);
    
        addToast("Form Submitted Succesfully", "Success");
      };
    

      const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
          setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    return (
        <div className="flex flex-col min-h-screen mobile:h-full w-full h-[800px] tablet:bg-green-950 bg-cover bg-center  lg:h-[1100px] md:overflow-x-hidden">
             <Link to="/" className="self-start z-20">
  <FaArrowLeft className="text-green-950 text-4xl absolute top-5 left-5" />
</Link> 
            <AuthHeader />
            <div className="relative bg-[url('/assets/icons/Vector-8.svg')] bg-cover bg-center">
            <div className="flex justify-center items-center w-full mobile:items-center mobile:justify-center mobile:w-[90%]">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-[15px] tablet:text-white text-green-950 font-semibold">
              First Step to Elevate your Farm.
            </span>
            <h2 className="font-bold text-[20px] tablet:text-white">
              Fill the GrenFlow Agrarian form
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col mobile:ml-5 mobile:w-full">
            <div className="flex flex-col mb-2">
              <div className="flex flex-row gap-1">
                <label className="font-bold tablet:text-white">
                  Farm name
                </label>
                <img src="assets/icons/Vector (7).svg" alt="" className="w-1" />
              </div>
              <input
                type="text"
                placeholder="Farm name"
                name="farmName" 
                value={formData.farmName} 
                onChange={handleChange}
                className="w-full rounded-md h-8 border-2 placeholder:pl-4 border-green-950  bg-white tablet:bg-opacity-80 tablet:placeholder:text-black placeholder:text-[12px]"
              />
            </div>

            <div className="flex flex-col mb-2">
              <div className="flex flex-row gap-1">
                <label className="font-bold tablet:text-white"> State</label>
                <img src="assets/icons/Vector (7).svg" alt="" className="w-1" />
              </div>
              <input
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full rounded-md h-8 border-2 placeholder:pl-4 border-green-950  bg-white tablet:bg-opacity-80 tablet:placeholder:text-black placeholder:text-[12px]"
              />
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex flex-row gap-1">
                <label className="font-bold tablet:text-white">City</label>
                <img src="assets/icons/Vector (7).svg" alt="" className="w-1" />
              </div>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-md h-8 border-2 placeholder:pl-4 border-green-950  bg-white tablet:bg-opacity-80 tablet:placeholder:text-black placeholder:text-[12px]"
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="font-bold tablet:text-white">Website</label>
              <input
                type="text"
                placeholder="Website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-md h-8 border-2 placeholder:pl-4 border-green-950  bg-white tablet:bg-opacity-80 tablet:placeholder:text-black placeholder:text-[12px]"
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="font-bold tablet:text-white">
                Social Media Links
              </label>
              <input
                type="url"
                placeholder="Social Media Links"
                name="socialLinks"
                value={formData.socialLinks}
                onChange={handleChange}
                className="w-full rounded-md h-8 border-2 placeholder:pl-4 border-green-950  bg-white tablet:bg-opacity-80 tablet:placeholder:text-black placeholder:text-[12px]"
              />
            </div>

            <div className="flex flex-col mb-2">
              <div className="flex flex-row gap-1">
                <label className="font-bold tablet:text-white">
                  Farm Product
                </label>
                <img src="assets/icons/Vector (7).svg" alt="" className="w-1" />
              </div>
              <input
                type="text"
                placeholder="Farm Product"
                name="farmProduct"
                value={formData.farmProduct}
                onChange={handleChange}
                className="w-full rounded-md h-8 border-2 placeholder:pl-4 border-green-950  bg-white tablet:bg-opacity-80 tablet:placeholder:text-black placeholder:text-[12px]"
              />
            </div>

            <div className="flex flex-col mb-2">
              <div className="flex flex-row gap-1 items-center">
                <label className="font-bold tablet:text-white">
                  Farm Area:
                </label>
                <img src="assets/icons/Vector (7).svg" alt="" className="w-1" />

                <span className="text-[12px] text-gray-300 mobile:hidden">
                  Your Farm Location 
                </span>
              </div>
              <div className="flex flex-row border-2  placeholder:pl-4 border-green-950 rounded-md gap-2 tablet:bg-white tablet:bg-opacity-80">
                <img
                  src="assets/icons/location_on (1).svg"
                  alt=""
                  className="ml-2"
                />
                <img src="assets/icons/Frame 79.svg" alt="" className="w-12" />
                <input
                  type="text"
                  className="w-full border-none h-8  bg-transparent outline-none"
                />
                <button
                  type="button" 
                  className="bg-green-600  focus:outline-none px-4 py-2 rounded-r-sm"
                >
                  <FaChevronDown className="text-white" />
                </button>
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label className="font-bold tablet:text-white mb-2">
                Upload Logo
              </label>
              <div className="flex flex-col items-center justify-center h-44 w-full border-2 border-dashed border-gray-300 rounded-lg relative">
                {!selectedImage ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 mobile:bg-white mobile:rounded-md">
                      <img
                        src="assets/images/file upload.png"
                        className="h-40 mobile:h-20"
                        alt="image upload"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="object-cover h-full w-full rounded-lg"
                  />
                )}
                <input
                  type="file"
                  className="hidden"
                  id="file-input"
                  onChange={handleImageChange}
                />
                {/* Label only covering the upload area */}
                <label
                  htmlFor="file-input"
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  style={{ width: "100%", height: "100%" }}
                >
                  {!selectedImage && (
                    <div className="absolute inset-0 bg-white opacity-0"></div>
                  )}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-600 ml-auto px-2 py-1 text-[white] text-[17px] rounded-md mt-5 mb-8 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
        </div>
    )
}