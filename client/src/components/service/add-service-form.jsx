import React from 'react';
import * as Yup from 'yup';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {createServiceRequest} from "../../store/service/service-thunk.js";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";


const AddServiceForm = () => {
    const navigate = useNavigate();
    const selector = useSelector((state) => state.serviceReducer);
    console.log(selector)
    const dispatch = useDispatch();





    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        subTitle: Yup.string().required('Subtitle is required'),

    })

    const Formik = useFormik({
        initialValues: {
            title: "",
            subTitle: "",
        },
        validationSchema,
        onSubmit: async (values, {resetForm}) => {
               const response =  await dispatch( createServiceRequest(values) );
               if(response.payload.status === "success"){
                   toast.success("Successfully added!");
                   resetForm();
                   navigate("/show-service" , {replace: true});
               }else{
                   toast.success("Failed to add!");

               }
        }
    })


    return (
        <div className="flex flex-col bg-white min-h-screen px-5 py-5  w-[80vw]">
            {/* Header */}
            <div className="w-full max-w-3xl lg:mt-20">
                <h1 className="text-2xl font-bold ">Add New Service</h1>
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
                            name={"subTitle"}
                            onChange={Formik.handleChange}
                            value={Formik.values.subTitle}
                            onBlur={Formik.handleBlur}
                            type="text"
                            id="subtitle"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog subtitle"
                        />
                        {Formik.touched.subTitle && Formik.errors.subTitle ?
                            <small className="text-red-500">{Formik.errors.subTitle}</small> : null}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-red-500 w-full text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServiceForm;
