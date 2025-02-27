import {  Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Home from "./maincomponents/Home"
import LLLayout from "./maincomponents/LLLayout"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"
import Services from "./components/Services"
import Test from "./components/Test"
import WebDevelopmentPage from "./components/WebDevelopmentPage"
import EcommercePage from "./components/EcommercePage"
import SocialMediaMarketingPage from "./components/SocialMediaMarketingPage"
import DigitalMarketingPage from "./components/DigitalMarketingPage"
import GraphicDesigningPage from "./components/GraphicDesigningPage"
import MobileAppDevelopmentPage from "./components/MobileAppDevelopmentPage"
import DesktopDevelopmentPage from "./components/Desktopapplication"
import Logout from "./components/Logout"
import RequireAuth from "./components/RequireAuth"

const App = () => {
  return (
    <div>
<LLLayout>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/services/desktopapplication" element={<DesktopDevelopmentPage/>}/>
  <Route path="/services/mobileapplications" element={<MobileAppDevelopmentPage/>}/>
  <Route path="/services/graphics" element={<GraphicDesigningPage/>}/>
  <Route path="/services/digitalmarketing" element={<DigitalMarketingPage/>}/>
  <Route path="/services/webdevelopment" element={<WebDevelopmentPage/>}/>
  <Route path="/services/socialmediamarketing" element={<SocialMediaMarketingPage/>}/>
  <Route path="/services/E-commerce" element={<EcommercePage/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/portfolio" element={<Portfolio/>}/>
  <Route path="/p" element={<Test/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>

  <Route path="/logout" element={<Logout />} />
        <Route element={<RequireAuth />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>

</Routes>
</LLLayout>


</div>
)
}

export default App