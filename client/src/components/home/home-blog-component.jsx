import React, {useEffect} from 'react';
import BlogComponent from "../blog/blog-component.jsx";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {commonBlogRequest} from "../../store/blog/blog-thunk.js";
import LoadingComponent from "../loading/loading-component.jsx";

const HomeBlogComponent = () => {


    const {isLoading , commonBlogs, isError} = useSelector((state) => state.blogReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(commonBlogRequest())
        })()
    },[])


    return (
        commonBlogs.data === null ?<LoadingComponent/> : <div>
            <div className="bg-white shadow py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Stay updated with the latest tips, trends, and insights in blogging, marketing, and content
                    creation.
                </p>
            </div>
            <div className="container mx-auto px-6 py-12">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    { commonBlogs.data == null ? <LoadingComponent/> : commonBlogs.data.slice(0, 6).map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4">{blog.subtitle}</p>
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

            <div className="  flex justify-center items-center w-full">
                <Link to={`/blog`}
                    className={"bg-black text-white hover:bg-white hover:text-black transition duration-200 w-52 py-3 shadow rounded mb-5 mt-5  text-center"}>More
                </Link>
            </div>
        </div>


    )
        ;
};

export default HomeBlogComponent;