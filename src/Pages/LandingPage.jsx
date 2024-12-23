import { useState } from "react";
import Blog from "../Component/Blog";
import Download from "../Component/Download";
import Footer from "../Component/Footer";
import HeroToggle from "../Component/HeroToggle";
import Navbar from "../Component/Navbar";
import Survey from "../Component/Survey";
import Mission from "../Component/Mission";
import { useEffect } from "react";
import Preloader from "../Component/Proloader/Preloader";
import Product from "../Component/Product";
import Worksflow from "../Component/WorksFlow";


export default function LanndingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Setting loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if  (isLoading) {
    return <Preloader />
  }

  return (
    <div>
    <Navbar />
    <HeroToggle />
    <Product /> 
    <Mission />
    <Worksflow />
    <Blog />
    <Download />
    <Survey />
    <Footer />
    </div>
  );
}