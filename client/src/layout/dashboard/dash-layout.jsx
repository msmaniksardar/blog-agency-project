import React from 'react';
import DashSidebar from "../../components/dashboard/dash-sidebar.jsx";

const DashLayout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <DashSidebar/>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DashLayout;