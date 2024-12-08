import React from 'react';
import HeaderComponent from "../../components/layout/header-component.jsx";
import FooterComponent from "../../components/layout/footer-component.jsx";

const MainLayout = ({children}) => {
    return (
        <div>
            <HeaderComponent/>
              {children}
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;