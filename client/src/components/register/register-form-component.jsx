import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {registerRequest} from "../../store/user/user-thunk.js";
import {toast} from "sonner";

const RegisterFormComponent = () => {

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    });

    const formik = useFormik({
        initialValues: {
            email: "", password: "",
        }, validationSchema, onSubmit: async (values, {resetForm}) => {
          const response =  await registerRequest(values);
            if(response.status ==="success") {
                resetForm();
                toast.success(response.message)

            }
            if(response.status === "fail") {
                toast.error(response.message)

            }

        }

    })


    return (<div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-3xl font-bold text-center mb-6">Registration</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your email"
                    />
                    {formik.touched.email && formik.errors.email ?
                        <small className="text-red-500">{formik.errors.email}</small> : null}
                </div>


                <div className="mb-6">
                    <label htmlFor="password" className="block text-lg font-medium mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your password"
                    />
                    {formik.touched.password && formik.errors.password ?
                        <small className="text-red-500">{formik.errors.password}</small> : null}
                </div>


                <button
                    type="submit"
                    className="w-full p-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all duration-300"
                >
                    Sign Up
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-sm"> Have an account? <Link to={"/login"}
                                                               className="text-orange-500 hover:underline">Sign
                    In</Link></p>
            </div>
        </div>
    </div>);
};

export default RegisterFormComponent;
