import conectImage from "/assets/icons/Connect.webp" 
import transportImage from "/assets/icons/Truck.webp"
import trackingImage from "/assets/icons/Tracking.jpg"
export default function Workflows () {
    return (
        <div className="relative bg-cover bg-center mt-10 bg-green-700">
            <div className="flex flex-col items-center gap-5">
                <h2 className="text-green-700 bg-white p-3 rounded-xl font-semibold text-2xl mt-5">How GreenFlows Works</h2>
                <div className="flex flex-row items-center justify-between gap-5 p-10 mobile:flex-col">

                 <div className="relative flex flex-col gap-5 group">
                    <h2 className="text-center font-semibold text-xl text-white">Connect</h2>
                 <div className="relative">
                    <img src={conectImage} alt="connect image" className="rounded-2xl w-full h-80" />
                 <div className="absolute inset-0 flex items-center justify-center bg-green-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <p className="text-white text-center p-4 font-semibold">GreenFlow connects farmers with buyers, providing a seamless platform to buy and sell perishable goods.</p>
                 </div>
                </div>
             </div>

                 <div className="relative flex flex-col gap-5 group">
                    <h2 className="text-center font-semibold text-xl text-white">Arrange Transport</h2>
                 <div className="relative">
                    <img src={transportImage} alt="transport image" className="rounded-2xl w-full h-80" />
                 <div className="absolute inset-0 flex items-center justify-center bg-green-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <p className="text-white text-center p-4 font-semibold">Efficient transport arrangements ensure that perishable products reach their destination without delay.</p>
                  </div>
                 </div>
              </div>
                   
                 <div className="relative flex flex-col gap-5 group">
                    <h2 className="text-center font-semibold text-xl text-white">Delivery & Track</h2>
                 <div className="relative">
                    <img src={trackingImage} alt="tracking image" className="rounded-2xl w-full h-80" />
                 <div className="absolute inset-0 flex items-center justify-center bg-green-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <p className="text-white text-center p-4 font-semibold">GreenFlow’s tracking system allows buyers and farmers to monitor the delivery in real-time, ensuring transparency and reliability in the journey from farm to table.</p>
              </div>
           </div>
         </div>
              </div>
            </div>
        </div>
    )

}