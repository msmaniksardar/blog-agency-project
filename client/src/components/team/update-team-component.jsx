import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {showBlogRequest, updateBlogRequest} from "../../store/blog/blog-thunk.js";
import {useFormik} from "formik";
import {toast} from "sonner";
import {showTeamRequest, updateTeamRequest} from "../../store/team/team-thunk.js";
import * as Yup from "yup";

const UpdateTeamComponent = () => {

    const {isLoading, team} = useSelector((state) => state.teamReducer);
    console.log(team)
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
                await dispatch(showTeamRequest(id));
        })()
    }, [])


    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        role: Yup.string().required('Role is required'),
        image: Yup.mixed().nullable().notRequired().test(
            "fileSize",
            "Image size must be less than 2MB",
            (value) => value ? value && value.size <= 2 * 1024 * 1024 : true  // 2MB limit
        ).test(
            "fileType",
            "Unsupported file format",
            (value) => value ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type) : true
        )
    })



    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            teamId: team._id,
            name: team.name  || "",
            role: team.role || "",
            image: null,
        },
        validationSchema,
        onSubmit: async (values) => {
          try {
              const response = await dispatch(updateTeamRequest(values));
              if(response.payload.status === "success"){
                  navigate("/show-team");
                  toast.success("Team updated successfully");
              }
          }catch (error) {
              console.log(error);
          }

        }
    })




    return (
        <div>
            <div className="flex flex-col bg-white min-h-screen px-5 py-5  w-[80vw]">
                {/* Header */}
                <div className="w-full max-w-3xl lg:mt-20">
                    <h1 className="text-2xl font-bold ">Update Team</h1>
                </div>

                {/* Form */}
                <div className="flex flex-col  mt-6 w-full">
                    <form  onSubmit={formik.handleSubmit} className="w-full max-w-3xl">
                        {/* Title Input */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog title"
                                required={true}
                            />
                            {formik.touched.name && formik.errors.name ?
                                <small className="text-red-500">{formik.errors.name}</small> : null}
                        </div>

                        {/* Sub Title Input */}
                        <div className="mb-4">
                            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <input
                                name={"role"}
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                type="text"
                                id="subtitle"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter blog subtitle"
                                required={true}
                            />
                            {formik.touched.role && formik.errors.role ?
                                <small className="text-red-500">{formik.errors.role}</small> : null}
                        </div>


                        <div className={"mb-4"}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Photo</label>
                            <input onChange={(event)=>{
                                const file = event.target.files[0];
                                formik.setFieldValue("image" , file);
                                formik.setFieldTouched("image" , true)
                            }} type="file" className="file-input file-input-bordered w-full "/>
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
                                {isLoading ? "Loading..." : "Update"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTeamComponent;