import React from 'react';
import NavBar from "./components/navBar";
import {Outlet} from "react-router-dom";
import Footer from "./components/layout/Footer";
import DesktopNav from "./components/layout/DesktopNav";
import MainNavBar from "./components/layout/MainNavBar";
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