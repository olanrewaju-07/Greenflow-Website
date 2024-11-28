import { Routes, Route } from "react-router-dom";
import LanndingPage from "./Pages/LandingPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import FarmerRegister from "./Component/FarmerRegister"
import ForgetPassword from "./Component/ForgetPassword";


export default function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<LanndingPage/>} />
         <Route path="signup"  element={<Signup />} /> 
         <Route path="login"    element={<Login />} />
         <Route path="farmerRegister" element={<FarmerRegister />} /> 
         <Route path="forgetpassword" element={<ForgetPassword />} />     
      </Routes>
    </div>
  );
}


