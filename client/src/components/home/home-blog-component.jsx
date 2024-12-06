import React from 'react';
import BlogComponent from "../blog/blog-component.jsx";

const HomeBlogComponent = () => {
    return (
        <div>
            <BlogComponent/>
            <div className=" grid grid-cols-1 justify-center ">
                <button>More</button>
            </div>
        </div>
    );
};

export default HomeBlogComponent;