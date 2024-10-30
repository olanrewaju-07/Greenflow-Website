import { Routes, Route } from "react-router-dom";
import LanndingPage from "./Pages/LandingPage";


export default function App() {
  return (
    <div>
      <Routes>
         <Route path="/" element={<LanndingPage/>} />
       
      </Routes>
    </div>
  );
}


