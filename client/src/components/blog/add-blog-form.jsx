import React from 'react';
import * as Yup from 'yup';
import {useFormik} from "formik";
import {createBlogRequest} from "../../store/blog/blog-thunk.js";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "sonner";


const AddBlogForm = () => {

    const dispatch = useDispatch();
    const {isLoading} = useSelector((state) => state.blogReducer);

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        subtitle: Yup.string().required('Subtitle is required'),
        description: Yup.string().required('Description is required'),
        image: Yup.mixed().required('Image is required') .test(
            "fileSize",
            "Image size must be less than 2MB",
            (value) => value && value.size <= 2 * 1024 * 1024 // 2MB limit
        ).test(
            "fileType",
            "Unsupported file format",
            (value) => value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        ),
    })

    const Formik = useFormik({
        initialValues: {
            title: "",
            subtitle: "",
            description: "",
            image: null
        },
        validationSchema,
        onSubmit: async (values, {resetForm}) => {
            const response = await dispatch(createBlogRequest(values));
            if(response.payload.status === "success"){
                toast.success(response.payload.message)
            }else{
                toast.success("Failed To Create Blog");
            }
            resetForm();

        }
    })


    return (
        <div className="flex flex-col bg-white min-h-screen px-5 py-5  w-[80vw]">
            {/* Header */}
            <div className="w-full max-w-3xl lg:mt-20">
                <h1 className="text-2xl font-bold ">Add New Blog</h1>
            </div>

            {/* Form */}
            <div className="flex flex-col  mt-6 w-full">
                <form onSubmit={Formik.handleSubmit} className="w-full max-w-3xl">
                    {/* Title Input */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            name={"title"}
                            onChange={Formik.handleChange}
                            value={Formik.values.title}
                            onBlur={Formik.handleBlur}
                            type="text"
                            id="title"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog title"
                        />
                        {Formik.touched.title && Formik.errors.title ?
                            <small className="text-red-500">{Formik.errors.title}</small> : null}
                    </div>

                    {/* Sub Title Input */}
                    <div className="mb-4">
                        <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                            Sub Title
                        </label>
                        <input
                            name={"subtitle"}
                            onChange={Formik.handleChange}
                            value={Formik.values.subtitle}
                            onBlur={Formik.handleBlur}
                            type="text"
                            id="subtitle"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog subtitle"
                        />
                        {Formik.touched.subtitle && Formik.errors.subtitle ?
                            <small className="text-red-500">{Formik.errors.subtitle}</small> : null}
                    </div>

                    {/* Blog Content */}
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Blog Content
                        </label>
                        <textarea
                            name={"description"}
                            onChange={Formik.handleChange}
                            value={Formik.values.description}
                            onBlur={Formik.handleBlur}
                            id="content"
                            rows="5"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog content"
                        ></textarea>
                        {Formik.touched.description && Formik.errors.description ?
                            <small className="text-red-500">{Formik.errors.description}</small> : null}
                    </div>

                    <div className={"mb-4"}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Choose Photo</label>
                        <input
                            onChange={(event)=>{
                                const file = event.target.files[0];
                                Formik.setFieldValue("image" , file);
                            }}
                            type="file"
                            className="file-input file-input-bordered w-full "/>
                        {Formik.touched.image && Formik.errors.image ?
                            <small className="text-red-500">{Formik.errors.image}</small> : null}
                    </div>


                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="px-6 py-2 bg-red-500 w-full text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
                        >
                            { isLoading ? "Loading..." : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogForm;
