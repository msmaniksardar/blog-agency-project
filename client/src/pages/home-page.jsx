import React from 'react';
import MainLayout from "../layout/main/main-layout.jsx";
import SliderComponent from "../components/home/slider-component.jsx";
import TeamComponent from "../components/about/team-component.jsx";
import HomeBlogComponent from "../components/home/home-blog-component.jsx";

const HomePage = () => {
    return (
        <MainLayout>
              <SliderComponent/>
              <HomeBlogComponent/>
              <TeamComponent/>

        </MainLayout>
    );
};

export default HomePage;