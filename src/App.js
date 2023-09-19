import React from 'react';
import NavBar from "./components/navBar";
import {Outlet} from "react-router-dom";
import Footer from "./components/layout/Footer";
import DesktopNav from "./components/layout/DesktopNav";
import MainNavBar from "./components/layout/MainNavBar";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './App.css';
const App = () => {
    return (
        <>
          <MainNavBar />
            <Outlet />
            <Footer />
        </>

    );
};

export default App;