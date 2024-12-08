import React from 'react';
import AddBlogForm from "../../../components/blog/add-blog-form.jsx";
import DashLayout from "../../../layout/dashboard/dash-layout.jsx";
import AddTeamForm from "../../../components/team/add-team-form.jsx";

const AddTeamPage = () => {
    return (
        <DashLayout>
            <AddTeamForm/>
        </DashLayout>
    );
};

export default AddTeamPage;