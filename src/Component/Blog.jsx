import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export default function Blog () {
    return (
        <div className="bg-[#FF66001A] flex flex-col items-center gap-2 mt-20 mx-auto max-w-6xl px-10 h-[90vh] border-2 border-[#263238] mobile:px-2 mobile:h-full tablet:h-fit tablet:px-2">
        <div className="flex flex-row items-center justify-between w-full mt-10">
          <h2 className="text-2xl font-bold text-[#263238]">Latest News & Blogs</h2>
          <div className="flex flex-row items-center gap-3">
            <FaCircleArrowLeft className="text-2xl cursor-pointer text-[#263238]" />
            <FaCircleArrowRight className="text-2xl cursor-pointer text-[#263238]"  />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full px-5 mt-5 mobile:flex-col mb-5 mobile:gap-5 tablet:gap-4">

           <div className="w-64 rounded-lg border-[#167206] border-2">
                 <img
                  src="/assets/images/Nigeria-Cocoa.webp"
                  alt="Image 1"
                  className="w-full h-48 object-cover px-4 py-4 rounded-xl"
                 />
              <div className="p-4 flex flex-col gap-3">
                <p className="text-black mt-2">
                Cocoa Hits New Record, Sells at N15m Per Tonne – CRIN by AgroNigeria.
                </p>
                <span className="text-black font-semibold">December 6, 2024</span>
                <a href="https://agronigeria.ng/cocoa-hits-new-record-sells-at-n15m-per-tonne-crin/" className="bg-[#f8bd00] rounded-lg p-2 w-fit text-black font-semibold">Read More</a>
              </div>
            </div>  

            <div className="w-64 rounded-lg border-[#167206] border-2">
                 <img
                  src="/assets/images/Maize.svg"
                  alt="Image 1"
                  className="w-full h-48 object-cover px-4 py-4 rounded-xl"
                 />
              <div className="p-4 flex flex-col gap-3">
                <p className="text-black mt-2">
                Nigerian Senate Amends Maize Export Prohibition Bill to Include Jail Term... 
                </p>
                <span className="text-black font-semibold">December 5, 2024</span>
                <a href="https://agronigeria.ng/nigerian-senate-amends-maize-export-prohibition-bill-to-include-jail-term-for-offenders/" className="bg-[#f8bd00] rounded-lg p-2 w-fit text-black font-semibold">Read More</a>
              </div>
            </div>  

            <div className="w-64 rounded-lg border-[#167206] border-2">
                 <img
                  src="/assets/images/Cocoa.svg"
                  alt="Image 1"
                  className="w-full h-48 object-cover px-4 py-4 rounded-xl"
                 />
              <div className="p-4 flex flex-col gap-3">
                <p className="text-black mt-2">
                NEPC Moves to Encourage Local Rice Production, Curb Importation by AgroNigeria.
                </p>
                <span className="text-black font-semibold">December 6, 2024</span>
                <a href="https://agronigeria.ng/nepc-moves-to-encourage-local-rice-production-curb-importation/" className="bg-[#f8bd00] rounded-lg p-2 w-fit text-black font-semibold">Read More</a>
              </div>
            </div>  
        </div>
      </div>
      
    )
}