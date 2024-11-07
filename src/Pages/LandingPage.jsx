import { useState } from "react";
import Blog from "../Component/Blog";
import Download from "../Component/Download";
import Footer from "../Component/Footer";
import HeroLandingPage from "../Component/HeroSection";
import Navbar from "../Component/Navbar";
import Product from "../Component/Product";
import Survey from "../Component/Survey";
import Workflows from "../Component/WorkFlows";
import { useEffect } from "react";
import Preloader from "../Component/Proloader/Preloader";


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
    <HeroLandingPage />
    <Product />
    <Workflows />
    <Download />
    <Blog />
    <Survey />
    <Footer />
    </div>
  );
}