import React from 'react';
import RegisterFormComponent from "../components/register/register-form-component.jsx";
import MainLayout from "../layout/main/main-layout.jsx";

const RegistrationPage = () => {
    return (
        <MainLayout>
            <RegisterFormComponent/>
        </MainLayout>
    );
};

export default RegistrationPage;