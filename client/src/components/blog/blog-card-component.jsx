import React from 'react';
import {Link} from "react-router-dom";

const BlogCardComponent = () => {
    const blogs = [
        {
            id: 1,
            title: "The Future of Blogging: Trends to Watch",
            excerpt: "Explore the upcoming trends in blogging and how you can stay ahead in the content game.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            title: "Top 10 SEO Tips for Bloggers",
            excerpt: "Boost your blog's visibility with these essential SEO tips and tricks.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            title: "How to Create Engaging Blog Content",
            excerpt: "Learn how to write blog posts that captivate your audience and drive traffic.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            title: "Monetizing Your Blog: A Comprehensive Guide",
            excerpt: "Discover effective ways to turn your blog into a profitable business.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 5,
            title: "Social Media Strategies for Bloggers",
            excerpt: "Leverage social media to promote your blog and reach a wider audience.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 6,
            title: "How to Stay Consistent with Blogging",
            excerpt: "Practical tips to help you maintain consistency and grow your blog over time.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 7,
            title: "How to Stay Consistent with Blogging",
            excerpt: "Practical tips to help you maintain consistency and grow your blog over time.",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 8,
            title: "How to Stay Consistent with Blogging",
            excerpt: "Practical tips to help you maintain consistency and grow your blog over time.",
            image: "https://via.placeholder.com/300",
        },
    ];

    return (
        <div>

            {/* Blog Section */}
            <div className="container mx-auto px-6 py-12">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCardComponent;