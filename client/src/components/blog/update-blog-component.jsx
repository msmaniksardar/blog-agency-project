import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showBlogRequest, updateBlogRequest} from "../../store/blog/blog-thunk.js";
import {Formik, useFormik} from "formik";
import {toast} from "sonner";
import * as Yup from "yup";

const UpdateBlogComponent = () => {
    const {isLoading , blog} = useSelector((state) => state.blogReducer);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    console.log(blog)
    useEffect(() => {
        (async () => {
            await dispatch(showBlogRequest(id))
        })()
    },[])


    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        subtitle: Yup.string().required('Subtitle is required'),
        description: Yup.string().required('Description is required'),
        image: Yup.mixed().nullable().notRequired().test(
            "fileSize",
            "Image size must be less than 2MB",
            (value) =>  value ? value && value.size <= 2 * 1024 * 1024 : true
        ).test(
            "fileType",
            "Unsupported file format",
            (value) => value ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type): true
        ),
    })



    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            blogId: blog._id,
            title: blog.title || "Hello",
            subtitle: blog.subtitle || "",
            description: blog.description || "",
            image: null,
        },
        validationSchema,
        onSubmit: async (values) => {
           const  response =  await dispatch(updateBlogRequest(values));
           if(response.payload.status === "success"){
               navigate("/show-blogs" , {replace: true});
               toast.success("Successfully updated blog");
            }
        }
    })


    return (
        <div>
            <div className="flex flex-col bg-white min-h-screen px-5 py-5  w-[80vw]">
                {/* Header */}
                <div className="w-full max-w-3xl lg:mt-20">
                    <h1 className="text-2xl font-bold ">Update Blog</h1>
                </div>

                {/* Form */}
                <div className="flex flex-col  mt-6 w-full">
                    <form onSubmit={formik.handleSubmit} className="w-full max-w-3xl">
                        {/* Title Input */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                name={"title"}
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                onBlur={formik.handleBlur}
                                type="text"
                                id="title"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog title"
                            />
                            {formik.touched.title && formik.errors.title ?
                                <small className="text-red-500">{formik.errors.title}</small> : null}
                        </div>

                        {/* Sub Title Input */}
                        <div className="mb-4">
                            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                                Sub Title
                            </label>
                            <input
                                name={"subtitle"}
                                onChange={formik.handleChange}
                                value={formik.values.subtitle}
                                type="text"
                                id="subtitle"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog subtitle"
                            />
                            {formik.touched.subtitle && formik.errors.subtitle ?
                                <small className="text-red-500">{formik.errors.subtitle}</small> : null}
                        </div>

                        {/* Blog Content */}
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                Blog Content
                            </label>
                            <textarea
                                name={"description"}
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                id="content"
                                rows="5"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog content"
                            ></textarea>
                            {formik.touched.description && formik.errors.description ?
                                <small className="text-red-500">{formik.errors.description}</small> : null}
                        </div>

                        <div>
                            <img src={blog.image} width={100} alt={blog.title}/>
                        </div>

                        <div className={"mb-4"}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Photo</label>
                            <input type="file" onChange={(event)=>{
                                const file = event.target.files[0];
                                formik.setFieldValue("image", file);
                            }} className="file-input file-input-bordered w-full "/>
                            {formik.touched.image && formik.errors.image ?
                                <small className="text-red-500">{formik.errors.image}</small> : null}
                        </div>


                        {/* Submit Button */}
                        <div className="mt-6 text-center">
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="px-6 py-2 bg-red-500 w-full text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
                            >
                                { isLoading ? "Loading" : "Update"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlogComponent;