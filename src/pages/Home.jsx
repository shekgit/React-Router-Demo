import React, {useContext} from 'react';
import {CompanyDataContext} from "../context/CompanyContext.jsx";


const Home = () => {

    const homeData = useContext(CompanyDataContext)
    return (

        <div className="w-full h-full lg:h-screen 2xl:h-screen  xl:text-[16vh] lg:text-[13vh] md:text-[9vh] sm:text-[7vh] text-[5vh]  tracking-[0.35em] px-4 text-nowrap  animate-fade-in">
            <div className=" py-6">
                <h1
                    className="p-4 text-2xl font-bold text-orange-400 bg-gray-700 w-[80vw] m-auto rounded-lg capitalize tracking-wider text-wrap"
                >{homeData.headline}
                </h1>
<h2 className="p-4 mt-6 text-2xl font-bold text-orange-400 bg-gray-700 w-[80vw] m-auto rounded-lg capitalize tracking-wider text-wrap">
    {homeData.subhead}
</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[80vw] justify-center mx-auto">
                {
                    homeData.points.map((point,idx) => {
                        return (

                            <div key={idx}
                                 className="p-4 bg-gray-700 w-full rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-[1.02] hover:shadow-lg">

                                <h2 className="md:text-2xl text-[4vw] font-bold text-blue-400 uppercase tracking-wider py-4 text-wrap m-auto">
                                    {point}
                                </h2>
                            </div>

                        )
                    })
                }
            </div>
            <div className=" py-6 text-wrap">
                <h3
                    className=" p-4 text-2xl font-bold text-orange-400 bg-gray-700 w-[80vw] m-auto rounded-lg capitalize tracking-wider"
                >{homeData.cta}
                </h3>

            </div>

        </div>
    );
};

export default Home;