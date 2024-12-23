import { useState } from "react";
import HeroSection from "./HeroSection";
import HeroSection2 from "./HeroSection2";

export default function HeroToggle() {
  const [activeSection, setActiveSection] = useState("GreenFlower");

  return (
    <div
      className={`pt-20 min-h-screen ${
        activeSection === "GreenFlower" ? "bg-[#167206]" : "bg-[#084DA6]"
      }`}
    >
      {/* Toggle Buttons */}
      <div className="flex gap-8 py-4">
        <button
          onClick={() => setActiveSection("GreenFlower")}
          className={`text-white px-4 py-2 border-b-4 ${
            activeSection === "GreenFlower"
              ? "border-white font-bold"
              : "border-gray-400 font-normal"
          }`}
        >
          GreenFlower
        </button>
        <button
          onClick={() => setActiveSection("Buyer")}
          className={`text-white px-4 py-2 border-b-4 ${
            activeSection === "Buyer"
              ? "border-white font-bold"
              : "border-gray-400 font-normal"
          }`}
        >
          Buyer
        </button>
      </div>

      {/* Active Section Content */}
      <div>
        {activeSection === "GreenFlower" && <HeroSection />}
        {activeSection === "Buyer" && <HeroSection2 />}
      </div>
    </div>
  );
}
