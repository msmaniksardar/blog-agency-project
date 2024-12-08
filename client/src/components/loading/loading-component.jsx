import React from 'react';

const LoadingComponent = () => {
    return (
        <div className="flex flex-row items-center justify-center min-h-screen w-[80vw]">
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingComponent;