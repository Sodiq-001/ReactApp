// import logo from './logo.svg';
// import Some from "./Some";
// import Comp from "./Comp";
// import Esuke from"./Esuke";
// import Map from "./Map";
// import Nuse from "./Nuse";
import React from "react";
import Pop from "./Pop"
// import Words from "./Words";
import  {Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Notfound from "./Notfound";
// import Faq from "./Faq";
// import Mca from "./Mca";
import Shirts from "./Shirts";
import Trousers from "./Trousers";
import Jackets from "./Jackets";
import Shorts from "./Shorts";
import Products from "./Products";
// import Home from "./Home";
// import Home from "./Home";
function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Notfound/>}/>
      <Route path="/products" element={<Products/>}> 
      <Route path="/products/shirts" element={<Shirts/>}/>
      <Route path="/products/trousers" element={<Trousers/>}/>
      <Route path="/products/jackets" element={<Jackets/>}/>
      <Route path="/products/shorts" element={<Shorts/>}/>
      </Route>
      {/* <Route path="/mca" element={<Mca/>}/> */}
   
    </Routes>
    </>
    // <Pop/>
    
//     // < >
//    {/* <Some set="a am good"/> */}
// {/* <Comp can="we are learnimg props today"/> */}
// {/* <Esuke book="Dhikrullah Muhammad Sodiq"/> */}
// {/* <Esuke hi="I am a good boy"/> */}
// {/* <Map/> */}
// {/* <Nuse/> */}
// {/* <Words/> */}
//     // </>
  );
}

export default App;
