import React from 'react';
import ShowBlogComponent from "../../../components/blog/show-blog-component.jsx";
import DashLayout from "../../../layout/dashboard/dash-layout.jsx";

const ShowBlogPage = () => {
    return (
        <DashLayout>
        <ShowBlogComponent/>
        </DashLayout>
    );
};

export default ShowBlogPage;