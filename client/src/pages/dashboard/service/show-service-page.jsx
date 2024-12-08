import React from 'react';
import ShowServiceComponent from "../../../components/service/show-service-component.jsx";
import DashLayout from "../../../layout/dashboard/dash-layout.jsx";

const ShowServicePage = () => {
    return (
        <DashLayout>
            <ShowServiceComponent/>
        </DashLayout>
    );
};

export default ShowServicePage;