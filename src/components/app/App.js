import React from "react";
import { Routes, Route } from "react-router";

import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import Header from "../header/header";
import About from "../../pages/about/about";
import Footer from "../footer/footer";
import ScrollToTop from "../scrollToTop/scrollToTop";

const App = () => {
 return(
   <>
     <Header/>
     <Routes>
       <Route exact path='/' element={ <Home/> } />
       <Route exact path='/login' element={ <Login/> } />
       <Route exact path='/movie' element={ <About/> } />
     </Routes>
     <Footer/>

     <ScrollToTop/>
   </>
 )
};

export default App;
