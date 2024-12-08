import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commonBlogRequest} from "../../store/blog/blog-thunk.js";
import {commonTeamRequest} from "../../store/team/team-thunk.js";

const TeamComponent = () => {

    const {isLoading, commonTeam, isError} = useSelector((state) => state.teamReducer);
    const dispatch = useDispatch();

    const data = useSelector((state) => state.teamReducer);
    console.log(data)

    useEffect(() => {
        (async () => {
            await dispatch(commonTeamRequest())
        })()
    }, [])


    return (commonTeam === null ? <h1>Loading</h1> :
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {commonTeam.map((member) => (<div
                        key={member._id}
                        className="bg-white shadow-lg rounded-lg p-6 text-center"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="rounded-full w-24 h-24 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                    </div>))}
                </div>
            </div>
    );
};

export default TeamComponent;