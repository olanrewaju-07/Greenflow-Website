export default function Worksflow (){
    return (
        <div className="flex flex-col items-center gap-5 p-3">
          <h2 className="text-4xl font-bold text-[#f8bd00]">Our WorkFlows</h2>
          <div className="flex flex-row items-center gap-10 mobile:grid mobile:grid-cols-1 tablet:grid tablet:grid-cols-2">
            <div className="w-64 bg-white rounded-lg shadow-lg shadow-[#167206] ">
                 <img
                  src="/assets/images/Cold Storage.svg"
                  alt="Image 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                 />
              <div className="p-4 text-center">
                <h2 className="text-[17px] font-bold text-[#167206]">Access Cold Storage</h2>
                <p className="text-black mt-2">
                Join GreenFlow Nexus today and reduce harvest losses by 60%, ensuring fresher produce and better profitability for your farm.
                </p>
              </div>
            </div>

            <div className="w-64 bg-white rounded-lg shadow-lg shadow-[#167206]">
                 <img
                  src="/assets/images/Connect.svg"
                  alt="Image 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                 />
              <div className="p-4 text-center">
                <h2 className="text-[17px] font-bold text-[#167206]">Connect with Off-takers</h2>
                <p className="text-black mt-2">
                  Get started today to unlock the opportunity to sell your produce, connect with buyers, and grow your business.
                </p>
              </div>
            </div>

            <div className="w-64 bg-white rounded-lg shadow-lg shadow-[#167206]">
                 <img
                  src="/assets/images/Transport.svg"
                  alt="Image 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                 />
              <div className="p-4 text-center">
                <h2 className="text-[17px] font-bold text-[#167206]">Arrange Transport</h2>
                <p className="text-black mt-2">
                  Sign up today to seamlessly transport your produce from the farm to buyers, ensuring freshness and efficiency every time.
                </p>
              </div>
            </div>

            <div className="w-64 bg-white rounded-lg shadow-lg shadow-[#167206]">
                 <img
                  src="/assets/icons/Tracking.jpg"
                  alt="Image 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                 />
              <div className="p-4 text-center">
                <h2 className="text-[17px] font-bold text-[#167206]">Delivering & Tracking</h2>
                <p className="text-black mt-2">
                  Start delivering and tracking your produce with ease, ensuring timely arrival and transparency throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}