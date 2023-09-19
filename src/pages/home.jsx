import React from 'react';
import Main from "../components/Main";
import Intro from "../components/Intro";
import Faq from "../components/Faq";
import SlideContainer from "../components/home/SlideContainer";

const Home = () => {
    return (
        <div>
            <Main />
            <Intro />
            <SlideContainer />
            <Faq />
        </div>
    );
};

export default Home;