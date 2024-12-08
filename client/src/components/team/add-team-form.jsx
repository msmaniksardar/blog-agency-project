import React from 'react';
import * as Yup from 'yup';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {createTeamRequest} from "../../store/team/team-thunk.js";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";


const AddTeamForm = () => {

    const {isLoading} = useSelector((state) => state.teamReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        role: Yup.string().required('Role is required'),
        image: Yup.mixed().required('Image is required')
            .test("fileSize", "file size must be less than 2MB ",
                (value) => value && value.size <= 2 * 1024 * 1024)
            .test("fileType", "Unsupported file format", (value) => value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type))


    })

    const Formik = useFormik({
        initialValues: {
            name: "", role: "", image: null
        }, validationSchema, onSubmit: async (values, {resetForm}) => {
           try {
               const response = await  dispatch(createTeamRequest(values));
               if(response.payload.status === "success"){
                   toast.success(response.payload.message);
                   navigate("/show-team");
                   resetForm();
               }


           }catch(error){
               console.log(error);
           }

        }
    })


    return (<div className="flex flex-col bg-white min-h-screen px-5 py-5  w-[80vw]">
        {/* Header */}
        <div className="w-full max-w-3xl lg:mt-20">
            <h1 className="text-2xl font-bold ">Add New Team</h1>
        </div>

        {/* Form */}
        <div className="flex flex-col  mt-6 w-full">
            <form onSubmit={Formik.handleSubmit} className="w-full max-w-3xl">
                {/* Title Input */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        name={"name"}
                        onChange={Formik.handleChange}
                        value={Formik.values.name}
                        onBlur={Formik.handleBlur}
                        type="text"
                        id="name"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter blog title"
                    />
                    {Formik.touched.name && Formik.errors.name ?
                        <small className="text-red-500">{Formik.errors.name}</small> : null}
                </div>

                {/* Sub Title Input */}
                <div className="mb-4">
                    <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                        Role
                    </label>
                    <input
                        name={"role"}
                        onChange={Formik.handleChange}
                        value={Formik.values.role}
                        onBlur={Formik.handleBlur}
                        type="text"
                        id="subtitle"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter blog subtitle"
                    />
                    {Formik.touched.role && Formik.errors.role ?
                        <small className="text-red-500">{Formik.errors.role}</small> : null}
                </div>


                <div className={"mb-4"}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Choose Photo</label>
                    <input
                        onChange={(event) => {
                            const file = event.target.files[0];
                            Formik.setFieldValue("image", file);
                        }}
                        type="file"
                        className="file-input file-input-bordered w-full "/>
                    {Formik.touched.image && Formik.errors.image ?
                        <small className="text-red-500">{Formik.errors.image}</small> : null}
                </div>


                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button disabled={isLoading}
                        type="submit"
                        className="px-6 py-2 bg-red-500 w-full text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
                    >
                        {isLoading ? "Loading..." : "Add"}
                    </button>
                </div>
            </form>
        </div>
    </div>);
};

export default AddTeamForm;
