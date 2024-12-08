import React from 'react';

import BlogCardComponent from "./blog-card-component.jsx";

const BlogComponent = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="bg-white shadow py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Stay updated with the latest tips, trends, and insights in blogging, marketing, and content
                    creation.
                </p>
            </div>


            {/* Blog Section */}
            <BlogCardComponent/>

            <div className="flex flex-row w-full justify-center py-10">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
            </div>
        </div>
    );
};

export default BlogComponent;