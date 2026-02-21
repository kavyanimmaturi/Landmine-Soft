import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import CareersPage from "./pages/CareersPage/CareersPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import FAQs from "./pages/FAQs/FAQs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MoreServices from "./pages/MoreServices/MoreServices";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/career" element={<CareersPage/>}/>
          <Route path="/faq" element={<FAQs/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/moreServices" element={<MoreServices/>}/>
       </Routes>
       <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
