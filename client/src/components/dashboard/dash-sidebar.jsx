import React, {useState} from 'react';
import {IoIosMenu} from "react-icons/io";
import {Link, NavLink} from "react-router-dom";
import {RxCross1} from "react-icons/rx";
import {logOut} from "../../controllers/auth-controller.js";

const DashSidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div>
            <aside
                className={`bg-black text-white w-64 h-full lg:w-64 lg:min-h-screen p-4 flex flex-col fixed lg:static transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
            >

                <div className={"flex flex-row items-center justify-between mb-4"}>
                    <h1 className="text-xl font-bold">My Dashboard</h1>
                    <button
                        className="lg:hidden p-2 bg-blue-600 text-white rounded-md"
                        onClick={toggleSidebar}
                    >
                        <RxCross1/>
                    </button>
                </div>
                <nav className="flex flex-col space-y-4">
                    {localStorage.getItem("admin") === "true" ?
                        <button>
                            <details className="dropdown block w-full text-left rounded-md  ">
                                <summary
                                    className="">Home
                                </summary>
                                <div className="mt-2 space-y-2 ">
                                    <a
                                        href="#"
                                        className="block py-1 px-4 rounded-md bg-blue-800 hover:bg-blue-700"
                                    >
                                        My Tasks
                                    </a>
                                    <a
                                        href="#"
                                        className="block py-1 px-4 rounded-md bg-blue-800 hover:bg-blue-700"
                                    >
                                        Team Tasks
                                    </a>
                                    <a
                                        href="#"
                                        className="block py-1 px-4 rounded-md bg-blue-800 hover:bg-blue-700"
                                    >
                                        Completed Tasks
                                    </a>
                                </div>
                            </details>
                        </button> : null
                    }
                    <button>
                        <details className="dropdown block w-full text-left rounded-md  ">
                            <summary
                                className="">Blog
                            </summary>
                            <div className="mt-2 space-y-2 ">
                                <Link className="block py-1 px-4 rounded-md bg-red-500 hover:bg-red-700"
                                      to={"/create-blog"}> Add New Blog</Link>
                                {localStorage.getItem("admin") === "true" ?
                                    <Link className="block py-1 px-4 rounded-md bg-red-500 hover:bg-red-700"
                                          to={"/show-blogs"}> Blogs</Link> : null}
                            </div>
                        </details>
                    </button>
                    {localStorage.getItem("admin") === "true" ? (<>
                        <button>
                            <details className="dropdown block w-full text-left rounded-md  ">
                                <summary
                                    className="">Team
                                </summary>
                                <div className="mt-2 space-y-2 ">
                                    <Link className="block py-1 px-4 rounded-md bg-red-500 hover:bg-red-700"
                                          to={"/create-team"}> Add New Team</Link>
                                    <Link className="block py-1 px-4 rounded-md bg-red-500 hover:bg-red-700"
                                          to={"/show-team"}> Teams</Link>
                                </div>
                            </details>
                        </button>
                        <button>
                            <details className="dropdown block w-full text-left rounded-md  ">
                                <summary
                                    className="">Service
                                </summary>
                                <div className="mt-2 space-y-2 ">
                                    <Link className="block py-1 px-4 rounded-md bg-red-500 hover:bg-red-700"
                                          to={"/create-service"}> Add New Service</Link>
                                    <Link className="block py-1 px-4 rounded-md bg-red-500 hover:bg-red-700"
                                          to={"/show-service"}> Services</Link>
                                </div>
                            </details>
                        </button>
                    </>) : null}

                </nav>
                <div className="mt-auto">
                    <button onClick={() => logOut()}
                            className="w-full py-2 px-4 bg-red-500 rounded-md text-white hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </aside>
            <div className="navbar flex justify-between bg-black lg:hidden ">
                <div className="flex-none">
                    <button onClick={toggleSidebar}><IoIosMenu color={"white"} size={30}/></button>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className={"text-white"}>User</summary>
                                <ul className="bg-base-100">
                                    <li>
                                        <button onClick={() => logOut()}>LogOut</button>
                                    </li>

                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default DashSidebar;