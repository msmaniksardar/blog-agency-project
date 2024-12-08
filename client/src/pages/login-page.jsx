import React from 'react';
import LoginFormComponent from "../components/login/login-form-component.jsx";
import MainLayout from "../layout/main/main-layout.jsx";

const LoginPage = () => {
    return (
        <MainLayout>
            <LoginFormComponent/>
        </MainLayout>
    );
};

export default LoginPage;