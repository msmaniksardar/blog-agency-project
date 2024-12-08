import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commonServiceRequest} from "../../store/service/service-thunk.js";


const ServiceCardComponent = () => {

    const {isLoading , commonService, isError} = useSelector((state) => state.serviceReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(commonServiceRequest())
        })()
    },[])


    return (
       commonService === null ? <h1>Loading</h1> : <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {commonService.map((service) => (
                    <div
                        key={service._id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600">{service.subTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCardComponent;