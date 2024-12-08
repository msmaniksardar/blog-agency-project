import React from "react";
import TeamComponent from "./team-component.jsx";

const AboutComponent = () => {

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-gray-50  py-16 text-center shadow">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Welcome to our blog agency! We specialize in crafting engaging content and building strong digital
                    presences for our clients.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Our Mission"
                            className="rounded-lg shadow-xl w-full max-w-md"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600">
                            Our mission is to help businesses and individuals create captivating stories through blogs and
                            content marketing. We craft meaningful content that resonates with audiences and enhances brand
                            visibility.
                        </p>
                    </div>
                </div>
            </div>

            {/* Meet the Team Section */}
                <TeamComponent/>

        </div>
    );
};

export default AboutComponent;
