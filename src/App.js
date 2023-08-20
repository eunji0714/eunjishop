import React from 'react';
import NavBar from "./components/navBar";
import {Outlet} from "react-router-dom";
const App = () => {
    return (
        <>
          <NavBar />
            <Outlet />

        </>

    );
};

export default App;