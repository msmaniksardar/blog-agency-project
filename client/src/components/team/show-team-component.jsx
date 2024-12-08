import React, {useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteTeamRequest, showTeamsRequest} from "../../store/team/team-thunk.js";
import LoadingComponent from "../loading/loading-component.jsx";
import {toast} from "sonner";


const ShowTeamComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isLoading, teams} = useSelector(state => state.teamReducer);
    useEffect(() => {
        (async () => {
            const response = await dispatch(showTeamsRequest());
            console.log(response);
        })()
    }, [])


    const handleDelete = async (id) => {
        try {
          const response =  await dispatch( deleteTeamRequest(id));
          if(response.payload.status === "success") {
              toast.success("deleted successfully");
          }
            await dispatch(showTeamsRequest());
            console.log(response);
            console.log(id);
        }catch(err) {
            console.log(err);
        }
    }

    return (
        teams === null ? <LoadingComponent/> : <div>
            <div className="flex flex-col px-4 py-6 w-[80vw] ">
                <div className="w-full  bg-white shadow-md rounded-lg overflow-hidden p-5">
                    <div className="p-4 border-b">
                        <h1 className="text-xl font-bold text-gray-700"> Manage Team</h1>
                    </div>
                    <div className="overflow-x-auto">
                        {isLoading && <LoadingComponent/>}
                        <table className="w-full table-auto">
                            <thead>
                            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {teams.map((user) => (
                                <tr key={user._id} className="border-t text-gray-600 text-center">

                                <td className="px-4 py-2">{user.name}</td>
                                <td className="px-4 py-2">{user.role}</td>
                                <td className="px-4 py-2 flex items-center justify-center space-x-2">
                                    <button onClick={()=> navigate(`/update-team/${user._id}` , {state : user})}
                                          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                                        onClick={() => handleDelete(user._id)}
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

export default ShowTeamComponent;