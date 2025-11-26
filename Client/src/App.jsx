import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home_main from "./pages/Home/Home_main";
import About_main from "./pages/About/About_main";
import Products_main from "./pages/Products/Products_main";
import NotFound from "./pages/Not_found";
import Contact_main from "./pages/Contact/Contact_main";
import Main_Landing from "./pages/Main_Landing";
import Product_card from "./pages/Products/Sections/Product_card";
import TV_Section from './pages/Products/Sections/TV_Section'
import AC_Section from "./pages/Products/Sections/AC_Section";
import VC_Section from "./pages/Products/Sections/VC_Section";
import Washine_Section from "./pages/Products/Sections/Washine_Section";
import Fridge_Section from "./pages/Products/Sections/Fridge_Section";
import Index from "./pages/Products/Sections/Index";


function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Main_Landing />}>
        <Route index element={<Home_main />} />
        <Route path="about" element={<About_main />} />
        <Route path="products" element={<Products_main />}>
        <Route index element={<Index/>}/>
          {/* <Route path="led" element={<Product_card />} /> */}
          <Route path="tv" element={<TV_Section />} />
          <Route path='ac' element={<AC_Section />} />
          <Route path='vc' element={<VC_Section />} />
          <Route path='wash' element={<Washine_Section/>}/>
          <Route path="fridge" element={<Fridge_Section/>}/>
        </Route>
        <Route path="contact" element={<Contact_main />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;