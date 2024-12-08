import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {showBlogRequest, updateBlogRequest} from "../../store/blog/blog-thunk.js";
import {showServiceRequest, updateServiceRequest} from "../../store/service/service-thunk.js";
import * as Yup from "yup";
import {useFormik} from "formik";
import {toast} from "sonner";

const UpdateServiceComponent = () => {

    const {isLoading , service} = useSelector((state) => state.serviceReducer);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            await dispatch(showServiceRequest(id))
        })()
    },[])

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        subTitle: Yup.string().required('Subtitle is required'),
    })



    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            serviceId: service._id,
            title: service.title || "Hello",
            subTitle: service.subTitle || "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const  response =  await dispatch(updateServiceRequest(values))
                if(response.payload.status === "success"){
                    toast.success("Successfully updated!");
                    navigate("/show-service");
                }
            }catch(error) {
                console.error(error);
            }
        }
    })



    return (
        <div>

            <div className="flex flex-col bg-white min-h-screen px-5 py-5  w-[80vw]">
                <div className="w-full max-w-3xl lg:mt-20">
                    <h1 className="text-2xl font-bold ">Update Service</h1>
                </div>

                <div className="flex flex-col  mt-6 w-full">
                    <form  onSubmit={formik.handleSubmit} className="w-full max-w-3xl">
                        {/* Title Input */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                name={"title"}
                                onChange={formik.handleChange}
                                value={formik.values.title}
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
                                name={"subTitle"}
                                onChange={formik.handleChange}
                                value={formik.values.subTitle}
                                type="text"
                                id="subtitle"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog subtitle"
                            />
                            {formik.touched.subTitle && formik.errors.subTitle ?
                                <small className="text-red-500">{formik.errors.subTitle}</small> : null}
                        </div>


                        {/* Submit Button */}
                        <div className="mt-6 text-center">
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="px-6 py-2 bg-red-500 w-full text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
                            >
                                {isLoading ? "Updating..." : "Update"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateServiceComponent;