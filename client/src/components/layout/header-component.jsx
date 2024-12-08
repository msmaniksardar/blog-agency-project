import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {IoIosMenu} from "react-icons/io";
import {logOut} from "../../controllers/auth-controller.js";

const HeaderComponent = () => {
    return (<header>
        <div className="header-container w-full bg-black hidden md:block">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="logo text-2xl font-bold">
                    <NavLink to="/" className="hover:text-orange-300 transition duration-300 text-white">
                        Blog Agency
                    </NavLink>
                </div>

                {/* Menu Section */}
                <ul className="flex space-x-8">
                    {[{path: "/", label: "Home"}, {path: "/about", label: "About"}, {
                        path: "/blog", label: "Blog"
                    }, {path: "/service", label: "Service"}, {path: "/contact", label: "Contact"},].map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-white font-bold hover:text-orange-300 transition duration-300"}
                            >
                                {item.label}
                            </NavLink>
                        </li>))}
                </ul>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className={"text-white"}>User</summary>
                                <ul className="bg-base-100">
                                    {localStorage.getItem("token") ? <li><button onClick={()=>logOut()}>Logout</button></li> :
                                        <li><Link to={"/login"}>Login</Link></li>}
                                    {localStorage.getItem("token") && <li><Link to={"/dashboard"}>Dashboard</Link></li>}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/*mobile navbar*/}
        <div className="navbar flex justify-between bg-black md:hidden ">
            <div className="flex-none">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="drawer-button"><IoIosMenu color={"white"}
                                                                                        size={30}/></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-black/90 text-base-content min-h-full w-80 p-4">
                            {[{path: "/", label: "Home"}, {path: "/about", label: "About"}, {
                                path: "/blog", label: "Blog"
                            }, {path: "/service", label: "Service"}, {
                                path: "/contact", label: "Contact"
                            },].map((item) => (<li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-white font-bold hover:text-orange-300 transition duration-300"}
                                >
                                    {item.label}
                                </NavLink>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className={"text-white"}>User</summary>
                            <ul className="bg-base-100">
                                <li><Link to={"/login"}>Login</Link></li>
                                {localStorage.getItem("token") && <li><a>Dashboard</a></li>}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </header>);
};

export default HeaderComponent;
