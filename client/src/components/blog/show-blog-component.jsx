import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteBlogRequest, showBlogsRequest} from "../../store/blog/blog-thunk.js";
import LoadingComponent from "../loading/loading-component.jsx";
import {toast} from "sonner";

const ShowBlogComponent = () => {

    const dispatch = useDispatch();
    const {isLoading, blogList } = useSelector(state => state.blogReducer);
    console.log(blogList);

    useEffect(() => {
        (async () => {
            const response =  await dispatch(showBlogsRequest());
            console.log(response);
        })()
    },[])

    const handleDelete = async (id) => {
        try {
            const response =  await dispatch(deleteBlogRequest(id));
            if(response.payload.status === "success"){
                toast.success(response.payload.message);
                await dispatch(showBlogsRequest());
            }

            console.log(response);
        }catch(err) {
            console.log(err);
        }
    }



    return (
      blogList === null ? <LoadingComponent/> :  <>
            <div  className="flex flex-col px-4 py-6 w-[80vw] ">
                <div className="w-full  bg-white shadow-md rounded-lg overflow-hidden p-5">
                    <div className="p-4 border-b">
                        <h1 className="text-xl font-bold text-gray-700"> Manage Blog</h1>
                    </div>
                    <div className="overflow-x-auto">
                        {isLoading && <LoadingComponent/>}
                        <table className="w-full table-auto">
                            <thead>
                            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">SubTitle</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {blogList.map((blog) => (<tr key={blog._id} className="border-t text-gray-600 text-center">

                                <td className="px-4 py-2 ">{blog.title}</td>
                                <td className="px-4 py-2 ">{blog.subtitle}</td>
                                <td className="px-4 py-2  flex items-center justify-center space-x-2">
                                    <Link  to={`/update-blog/${blog._id}`}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                                        onClick={ ()=> handleDelete(blog._id)  }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowBlogComponent;