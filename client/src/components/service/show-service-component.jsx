import React, {useEffect} from 'react';
import DashLayout from "../../layout/dashboard/dash-layout.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteServiceRequest, showServicesRequest} from "../../store/service/service-thunk.js";
import LoadingComponent from "../loading/loading-component.jsx";
import {toast} from "sonner";

const ShowServiceComponent = () => {
    const navigate = useNavigate();
    const {isLoading , serviceList} = useSelector((state) => state.serviceReducer);
    const dispatch = useDispatch();



    useEffect(() => {
        (async () => {
            await dispatch(showServicesRequest())
        })()
    },[])


    const handleDelete = async (id) => {
        try {
            const response = await dispatch(deleteServiceRequest(id));
            if(response.payload.status === "success"){
                toast.success("Successfully deleted");
                await dispatch(showServicesRequest());
            }
        }catch(err) {
            console.log(err);
        }
    }



    const data = [
        {id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin"},
        {id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Editor"},
        {id: 3, name: "Mark Taylor", email: "mark.taylor@example.com", role: "Viewer"},];

    return (
        serviceList === null ? <LoadingComponent/> : <div>
            <div  className="flex flex-col px-4 py-6 w-[80vw] ">
                <div className="w-full  bg-white shadow-md rounded-lg overflow-hidden p-5">
                    <div className="p-4 border-b">
                        <h1 className="text-xl font-bold text-gray-700"> Manage Services</h1>
                    </div>
                    <div className="overflow-x-auto">
                        {isLoading && <LoadingComponent/>}
                        <table className="w-full table-auto">
                            <thead>
                            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Sub Title</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {serviceList.map((data) => (<tr key={data._id} className="border-t text-gray-600 text-center">

                                <td className="px-4 py-2">{data.title}</td>
                                <td className="px-4 py-2">{data.subTitle}</td>
                                <td className="px-4 py-2 flex items-center justify-center space-x-2">
                                    <Link to={`/update-service/${data._id}`}
                                          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                                        onClick={() =>  handleDelete(data._id)}
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
        </div>
    );
};

export default ShowServiceComponent;