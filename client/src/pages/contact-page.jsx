import React from 'react';
import MainLayout from "../layout/main/main-layout.jsx";
import FormComponent from "../components/contact/form-component.jsx";

const ContactPage = () => {
    return (
        <MainLayout>
          <FormComponent/>
        </MainLayout>
    );
};

export default ContactPage;