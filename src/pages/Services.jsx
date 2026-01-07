import React from 'react';
import {Outlet, NavLink} from "react-router-dom";

const Services = () => {
    return (

        <div className="p-6 w-full h-screen animate-fade-in">
            {/* Submenu Navigation */}

                <div className="flex gap-4 mb-8 border-b border-gray-700 pb-4 flex-wrap w-full ">
                    <NavLink
                        to="/services"
                        end
                        className={({isActive}) =>
                            `px-4 py-2 rounded-lg transition-all duration-300 transform ${
                                isActive
                                    ? 'bg-gradient-to-r from-amber-700 to-amber-600 scale-105 shadow-lg '
                                    : 'bg-gray-800 hover:bg-gray-700 hover:scale-105 hover:shadow-md'
                            }`
                        }
                    >
                        All Services
                    </NavLink>

                    <NavLink
                        to="/services/web-dev"
                        className={({isActive}) =>
                            `px-4 py-2 rounded-lg transition-all duration-300 transform ${
                                isActive
                                    ? 'bg-gradient-to-r from-amber-700 to-amber-600 scale-105 shadow-lg'
                                    : 'bg-gray-800 hover:bg-gray-700 hover:scale-105 hover:shadow-md'
                            }`
                        }
                    >
                        Web Development
                    </NavLink>

                    <NavLink
                        to="/services/app-dev"
                        className={({isActive}) =>
                            `px-4 py-2 rounded-lg transition-all duration-300 transform ${
                                isActive
                                    ? 'bg-gradient-to-r from-amber-700 to-amber-600 scale-105 shadow-lg'
                                    : 'bg-gray-800 hover:bg-gray-700 hover:scale-105 hover:shadow-md'
                            }`
                        }
                    >
                        App Development
                    </NavLink>

                    <NavLink
                        to="/services/consulting"
                        className={({isActive}) =>
                            `px-4 py-2 rounded-lg transition-all duration-300 transform ${
                                isActive
                                    ? 'bg-gradient-to-r from-amber-700 to-amber-600 scale-105 shadow-lg'
                                    : 'bg-gray-800 hover:bg-gray-700 hover:scale-105 hover:shadow-md'
                            }`
                        }
                    >
                        Consulting
                    </NavLink>
                </div>
            {/* Content Area - Nested routes render here */}
            <Outlet/>
        </div>

    );
};

export default Services;