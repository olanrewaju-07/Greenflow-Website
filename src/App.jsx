import { Routes, Route, Outlet } from "react-router-dom";
import LanndingPage from "./Pages/LandingPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import FarmerRegister from "./Component/FarmerRegister";
import ForgetPassword from "./Component/ForgetPassword";
import AuthSidebar from "./Component/AuthSidebar";
import Home from "./Pages/Home";
import BrowseProduct from "./Pages/BrowseProduct";
import MyOrder from "./Pages/MyOrder";
import Cart from "./Pages/Cart"
import Notification from "./Component/Notification";
import Setting from "./Component/Setting";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LanndingPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="farmerRegister" element={<FarmerRegister />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />

        {/* Layout Wrapper */}
        <Route element={<GreenflowerLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="browseproduct" element={<BrowseProduct />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="cart"  element={<Cart />} />
          <Route path="notification" element={<Notification />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}

function GreenflowerLayout() {
  return (
    <div className="flex h-fit bg-[#263238]">
      <div className="w-[250px] fixed h-screen mobile:static">
        <AuthSidebar />
      </div>
      <div className="lg:flex-1 w-full tablet:flex-none overflow-y-auto ml-[250px] mobile:ml-0">
        <Outlet />
      </div>
    </div>
  );
}
