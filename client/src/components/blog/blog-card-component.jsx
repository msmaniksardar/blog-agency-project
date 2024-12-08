import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {commonBlogRequest} from "../../store/blog/blog-thunk.js";
import LoadingComponent from "../loading/loading-component.jsx";
import {resetState} from "../../store/blog/blog-slice.js";

const BlogCardComponent = () => {

    const {isLoading , commonBlogs, isError} = useSelector((state) => state.blogReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
          const response =  await dispatch(commonBlogRequest())
            console.log(response);
        })()
    },[])


    return (
        commonBlogs.data === null ? <LoadingComponent/> :  <div>

            {/* Blog Section */}
            <div className="container mx-auto px-6 py-12">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {commonBlogs.data == null ? <LoadingComponent/> : commonBlogs.data.map((blog) => (
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
        </div>
    );
};

export default BlogCardComponent;