import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom'
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import ServicesMain from "./components/ServicesMain.jsx";
import WebDev from "./components/WebDev.jsx";
import AppDev from "./components/AppDev.jsx";
import Consulting from "./components/Consulting.jsx";


const App = () => {

    return (
        <>
            <div className="bg-gray-900 text-white w-full  h-full flex flex-col p-4 overflow-hidden">
                <div className={"flex justify-center items-center "}>
                    <div >
                        {/*<h2 className={'border-1 font-bold py-2 px-4 tracking-[0.3em] text-[1.5vh] md:text-xl lg:text-2xl rounded bg-lime-900 '}>LOGO</h2>*/}
                        {/*<h2 className={'border-1 font-bold py-2 px-4 tracking-[0.3em] text-[1.5vh] md:text-xl lg:text-2xl rounded bg-gradient-to-r from-lime-900 to-emerald-900 shadow-lg hover:shadow-lime-500/20 transition-shadow duration-300 cursor-pointer'}>LOGO</h2>*/}

                        <h2 className={'border-1 font-bold py-2 px-4 tracking-[0.3em] text-[1.5vh] md:text-xl lg:text-2xl rounded bg-gradient-to-r from-lime-900 to-emerald-900 shadow-lg hover:shadow-lime-500/20 transition-all duration-300 hover:scale-105 cursor-pointer animate-pulse-slow'}>
                            LOGO
                        </h2> </div>
                    <div
                        className="flex flex-wrap w-full justify-end items-center p-4 gap-8 text-[2vh] md:text-xl  lg:text-3xl uppercase font-thin tracking-[0.2em] ">
                        <NavLink to={'/'}
                                 className={({isActive}) =>
                                     `px-2 py-1 rounded transition-all duration-300 ease-in-out ${
                                         isActive
                                             ? 'text-lime-300 font-bold scale-105'
                                             : 'text-gray-300 hover:text-amber-500 hover:scale-105'
                                     }`
                                 }
                        > Home </NavLink>
                        <NavLink to={'/about'}
                                 className={({isActive}) =>
                                     `px-2 py-1 rounded transition-all duration-300 ease-in-out ${
                                         isActive
                                             ? 'text-lime-300 font-bold scale-105'
                                             : 'text-gray-300 hover:text-amber-500 hover:scale-105'
                                     }`
                                 }
                        > About </NavLink>
                        <NavLink to={'/services'}
                                 className={({isActive}) =>
                                     `px-2 py-1 rounded transition-all duration-300 ease-in-out ${
                                         isActive
                                             ? 'text-lime-300 font-bold scale-105'
                                             : 'text-gray-300 hover:text-amber-500 hover:scale-105'
                                     }`
                                 }
                        > Services </NavLink>
                        <NavLink to={'/contact'}
                                 className={({isActive}) =>
                                     `px-2 py-1 rounded transition-all duration-300 ease-in-out ${
                                         isActive
                                             ? 'text-lime-300 font-bold scale-105'
                                             : 'text-gray-300 hover:text-amber-500 hover:scale-105'
                                     }`
                                 }
                        > Contact </NavLink>
                    </div>
                </div>

                <div>
                    <Routes>
                        <Route path="/" element={< Home

                        />}/>
                        <Route path="/about" element={< About />}/>
                        <Route path="/services" element={< Services />} >
                            <Route index element={<ServicesMain />} />
                            <Route path="web-dev" element={<WebDev />} />
                            <Route path="app-dev" element={<AppDev />} />
                            <Route path="consulting" element={<Consulting />} />
                        </Route>
                        <Route path="/contact" element={< Contact />}/>
                        <Route path={"/*"} element={<Error />}/>
                    </Routes>
                </div>
            </div>

        </>
    );
};

export default App;