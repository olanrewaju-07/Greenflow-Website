import Blog from "../Component/Blog";
import Download from "../Component/Download";
import Footer from "../Component/Footer";
import HeroLandingPage from "../Component/HeroSection";
import Navbar from "../Component/Navbar";
import Product from "../Component/Product";
import Survey from "../Component/Survey";
import Workflows from "../Component/WorkFlows";

export default function LanndingPage() {
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