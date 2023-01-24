import React, {useEffect} from "react";
import {Routes, Route, Navigate} from "react-router";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import Header from "../header/header";
import About from "../../pages/about/about";
import Footer from "../footer/footer";
import ScrollToTop from "../scrollToTop/scrollToTop";


const App = () => {
  const currentUser = useSelector( ( state ) => state.user);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify({token: currentUser.token}));
  }, [currentUser]);

 return(
   <>
     {
       location.pathname !== '/login' && (
         <Header/>
       )
     }
     <Routes>
       <Route exact path='/' element={ Object.keys(currentUser).length === 0 ? <Navigate replace to={'/login'} /> : <Home /> } />
       <Route exact path='/login' element={ Object.keys(currentUser).length === 0 ?  <Login /> : <Navigate replace to={'/'}/> } />
       <Route exact path='/movie' element={ <About/> } />
     </Routes>

     {
       location.pathname !== '/login' && (
         <Footer/>
       )
     }

     <ScrollToTop/>
   </>
 )
};

export default App;
