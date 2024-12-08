import React from 'react';
import MainLayout from "../layout/main/main-layout.jsx";
import BlogComponent from "../components/blog/blog-component.jsx";
import {Link} from "react-router-dom";

const BlogPage = () => {
    return (
        <MainLayout>
            <BlogComponent/>
        </MainLayout>
    );
};

export default BlogPage;