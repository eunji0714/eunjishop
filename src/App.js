import React from 'react';
import NavBar from "./components/navBar";
import {Outlet} from "react-router-dom";
import Footer from "./components/layout/Footer";
const App = () => {
    return (
        <>
          <NavBar />
            <Outlet />
            <Footer />
        </>

    );
};

export default App;