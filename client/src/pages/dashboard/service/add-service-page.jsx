import React from 'react';
import AddServiceForm from "../../../components/service/add-service-form.jsx";
import DashLayout from "../../../layout/dashboard/dash-layout.jsx";

const AddServicePage = () => {
    return (
        <DashLayout>
            <AddServiceForm/>
        </DashLayout>
    );
};

export default AddServicePage;