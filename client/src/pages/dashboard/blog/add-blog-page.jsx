import React from 'react';
import AddBlogForm from "../../../components/blog/add-blog-form.jsx";
import DashLayout from "../../../layout/dashboard/dash-layout.jsx";

const AddBlogPage = () => {
    return (
        <DashLayout>
            <AddBlogForm/>
        </DashLayout>
    );
};

export default AddBlogPage;