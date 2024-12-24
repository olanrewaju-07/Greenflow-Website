import { Routes, Route } from "react-router-dom";
import LanndingPage from "./Pages/LandingPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import FarmerRegister from "./Component/FarmerRegister"
import ForgetPassword from "./Component/ForgetPassword";
import AuthSidebar from "./Component/AuthSidebar";
import Home from "./Pages/Home";


export default function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<LanndingPage/>} />
         <Route path="signup"  element={<Signup />} /> 
         <Route path="login"    element={<Login />} />
         <Route path="farmerRegister" element={<FarmerRegister />} /> 
         <Route path="forgetpassword" element={<ForgetPassword />} />  

         <Route element={<GreenflowerLayout />}>
          <Route path="/home" element={<Home />} />
         </Route>   
      </Routes>
    </div>
  );
}


function GreenflowerLayout () {
  return (
    <div className="flex h-fit bg-[#167206]">
      <div className="w-[300px]">
        <AuthSidebar />
      </div>
      <div className="lg:flex-1 w-full tablet:flex-none">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}


