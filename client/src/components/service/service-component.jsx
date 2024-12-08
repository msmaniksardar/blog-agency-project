import React from 'react';
import ServiceCardComponent from "./service-card-component.jsx";

const ServiceComponent = () => {


    return (
        <div className="min-h-screen bg-gray-100">

            <div className={"flex flex-row justify-center bg-white shadow"}>
                <div className="py-16 text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Service</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-10">

                {/* Grid Layout */}
                <ServiceCardComponent/>
            </div>
        </div>
    );
};

export default ServiceComponent;
