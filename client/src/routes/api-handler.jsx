import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page.jsx";
import NotFoundPage from "../pages/not-found-page.jsx";
import AboutPage from "../pages/about-page.jsx";
import BlogPage from "../pages/blog-page.jsx";
import ContactPage from "../pages/contact-page.jsx";
import ServicesPage from "../pages/services-page.jsx";
import LoginPage from "../pages/login-page.jsx";
import RegistrationPage from "../pages/registration-page.jsx";
import DashboardPage from "../pages/dashboard-page.jsx";
import AddBlogPage from "../pages/dashboard/blog/add-blog-page.jsx";
import ShowBlogPage from "../pages/dashboard/blog/show-blog-page.jsx";
import UpdateBlogPage from "../pages/dashboard/blog/update-blog-page.jsx";
import AddBlogForm from "../components/blog/add-blog-form.jsx";
import ShowTeamPage from "../pages/dashboard/team/show-team-page.jsx";
import AddTeamPage from "../pages/dashboard/team/add-team-page.jsx";
import UpdateTeamPage from "../pages/dashboard/team/update-team-page.jsx";
import AddServicePage from "../pages/dashboard/service/add-service-page.jsx";
import ShowServicePage from "../pages/dashboard/service/show-service-page.jsx";
import UpdateBlogComponent from "../components/blog/update-blog-component.jsx";
import UpdateServicePage from "../pages/dashboard/service/update-service-page.jsx";

const ApiHandler = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/service" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="*" element={<NotFoundPage />} />

                {" // Dashboard route"}
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/add-blog" element={<AddBlogPage />} />

                {"/ handle Blog"}
                <Route path={"/create-blog" } element={<AddBlogPage/>}/>
                <Route path={"/show-blogs" } element={<ShowBlogPage/>}/>
                <Route path={"/update-blog/:id" } element={<UpdateBlogPage/>}/>
                {"/ handle team"}
                <Route path={"/create-team" } element={<AddTeamPage/>}/>
                <Route path={"/show-team" } element={<ShowTeamPage/>}/>
                <Route path={"/update-team/:id" } element={<UpdateTeamPage/>}/>
                {"/ handle service"}
                <Route path={"/create-service" } element={<AddServicePage/>}/>
                <Route path={"/show-service" } element={<ShowServicePage/>}/>
                <Route path={"/update-service/:id" } element={<UpdateServicePage/>}/>

            </Routes>
        </BrowserRouter>
        </>
    );
};

export default ApiHandler;