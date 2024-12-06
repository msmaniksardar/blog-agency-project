import React from 'react';
import HeaderComponent from "../../components/layout/header-component.js";
import FooterComponent from "../../components/layout/footer-component.js";

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