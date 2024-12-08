import React from 'react';
import { SunspotLoader } from "react-awesome-loaders";
const LoadingComponent = () => {
    return (
        <div className={"flex items-center justify-center w-screen h-screen"}>
            <SunspotLoader
                gradientColors={["#6366F1", "#E0E7FF"]}
                shadowColor={"#3730A3"}
            />
        </div>
    );
};

export default LoadingComponent;