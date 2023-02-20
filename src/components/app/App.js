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
import MyList from "../../pages/myList/myList";
import Registration from "../../pages/registration/registration";


const App = () => {
  const currentUser = useSelector( ( state ) => state.user);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify({token: currentUser.token}));
  }, [currentUser]);

 return(
   <>
     {
       location.pathname !== '/login' && location.pathname !== '/registration' && (
         <Header/>
       )
     }
     <Routes>
       <Route exact path='/' element={ Object.keys(currentUser).length === 0 ? <Navigate replace to={'/login'} /> : <Home/> } />
       <Route exact path='/login' element={ Object.keys(currentUser).length === 0 ?  <Login/> : <Navigate replace to={'/'}/> } />
       <Route exact path='/movie' element={ Object.keys(currentUser).length === 0 ? <Navigate replace to={'/login'} /> : <About/> }  />
       <Route exact path='/myList' element={ Object.keys(currentUser).length === 0 ? <Navigate replace to={'/login'} /> : <MyList/> }  />
       <Route exact path='/registration' element={ Object.keys(currentUser).length === 0 ? <Registration/> : <Navigate replace to={'/'} /> }  />
     </Routes>

     {
       location.pathname !== '/login' && location.pathname !== '/registration' && (
         <Footer/>
       )
     }

     <ScrollToTop/>
   </>
 )
};

export default App;
