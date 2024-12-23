export default function HeroSection() {
  return (
    <div className="pt-20 mb-10 relative bg-[#167206] mobile:pt-8">
      {/* Background Image */}
      <div className="absolute inset-0 flex flex-row items-center justify-center gap-10 object-cover">
        <img src="/assets/images/Vector.svg" alt="vector image" className="rotate-180 w-80 mobile:w-40" />
        <img src="/assets/images/Vector.svg" alt="vector image" className="w-80 mobile:w-40" />
      </div>
      {/* Main Content */}

      <div className="flex flex-col lg:flex-row items-center lg:items-start px-8 lg:px-16 h-[70vh] relative z-10 mobile:gap-4">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mobile:order-2">
          <h1 className="text-4xl font-bold mb-4 text-white mobile:text-3xl mobile:text-center">
            The Link Every Farmer Needs
          </h1>
          <p className="text-lg text-white mt-6 mobile:text-center">
            Join GreenFlow to link your harvest with trusted offtakers and cold storage solutions.
          </p>
          <div className="flex gap-4 mt-20 relative z-20">
            <button className="bg-[#263238] text-white px-6 py-3 mobile:px-4 rounded hover:bg-white hover:text-[#263238] font-semibold">
              Be a GreenFlower
            </button>
            <button className="bg-[#f8bd00] text-white px-6 py-3 mobile:px-4   rounded hover:text-[#f8bd00] hover:bg-white font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative lg:w-1/2 flex justify-center mobile:order-1">
          <img
            src="/assets/images/Group 76.svg"
            alt="Hands holding soil"
            className="rounded-full w-80 h-80 object-cover z-10 mobile:w-40 mobile:h-40"
          />
        </div>
      </div>
    </div>
  );
}
