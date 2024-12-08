import React from 'react';
import ShowBlogComponent from "../../../components/blog/show-blog-component.jsx";
import ShowTeamComponent from "../../../components/team/show-team-component.jsx";
import DashLayout from "../../../layout/dashboard/dash-layout.jsx";

const ShowTeamPage = () => {
    return (
        <DashLayout>
            <ShowTeamComponent/>
        </DashLayout>
    );
};

export default ShowTeamPage;