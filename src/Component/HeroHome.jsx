import { FaAngleDown } from "react-icons/fa";

export default function HeroHome() {
  return (
       <div className="relative">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row bg-white items-center gap-3 w-fit p-2 rounded-2xl mt-5 absolute top-0 right-0 mr-10 mobile:mr-2">
          <img
            src="/assets/images/Account.svg"
            alt="Users icon"
            className="w-10"
          />
          <div className="flex flex-row gap-3 items-center">
            <h2 className="text-[15px] font-semibold opacity-85">
              Ayankunle Hiqmah
            </h2>
            <FaAngleDown className="text-[20px] text-[#263238] font-semibold " />
          </div>
        </div>
        <div className="flex flex-col gap-10 bg-[#F3F3F3] rounded-l-lg px-8 py-4 mt-24 mobile:px-2">
          <div className="flex flex-row gap-2 items-center justify-between mobile:flex-col">
            <div className="flex flex-col gap-2 mobile:items-center">
            <h2 className="text-[25px] mobile:text-[16px]">
              Welcome,Hiqmah👋
            </h2>
            <span className="text-[15px] font-medium">You can now select and manage your order.</span>
            </div>
            <button className="bg-[#167206] text-white px-4 py-2 rounded-md shadow hover:bg-[#43b62f]">
              Start Shopping
        </button>
        </div>
            <div className="flex flex-col gap-6 p-6 bg-gray-100 flex-1">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {/* Active Orders Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">My Orders</h2>
          <ul className="mt-4">
            <li className="flex justify-between items-center py-2 border-b border-gray-200">
              <span>Vegeatables</span>
              <span className="text-[#167206] font-semibold">In Progress</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b border-gray-200">
              <span>Meat</span>
              <span className="text-yellow-600 font-semibold">Pending</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <span>Processed Foods</span>
              <span className="text-red-600 font-semibold">Cancelled</span>
            </li>
          </ul>
          <button className="bg-[#167206] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#43b62f]">
             View Details
              </button>
        </div>

        {/* Calendar for Bookings */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Connect with a GreenFlower</h2>
            <p className="text-gray-500">Would you like to speak with any of our farmers?
            Connect with a GreenFlower is to help you communicate with any of our farmers</p>
            <button className="bg-[#167206] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#43b62f]">
             Connect with a GreenFlower
              </button>
        </div>

                   {/* Spending Summary */}
                <div className="bg-white shadow-md rounded-lg p-6">
                   <h2 className="text-lg font-semibold text-gray-700">Spending Summary</h2>
                  <div className="mt-4">
                   <p className="text-gray-600">This Month: <span className="text-[#167206] font-bold">$300</span></p>
                   <p className="text-gray-600 mt-2">Last Month: <span className="text-gray-500">$250</span></p>
                   <p className="text-gray-600 mt-2">Total Orders: <span className="text-[#167206] font-bold">15</span></p>
                  </div>
                </div>

        </div>

      {/* Notifications Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
        <ul className="mt-4">
          <li className="flex justify-between items-center py-2 border-b border-gray-200">
            <span> Veagetable is ready for pickup</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center py-2 border-b border-gray-200">
            <span>New booking for refrigerated bus</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
          <li className="flex justify-between items-center py-2">
            <span>Your product listing has been approved</span>
            <span className="text-sm text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  
    </div>
    </div>
    </div>
  )
}