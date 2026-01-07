import React from 'react';

const ServicesMain = () => {
    return (
        <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-300 mb-6">
                We offer a wide range of professional services. Select a service from the menu above.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div
                    className="p-4 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/50 cursor-pointer animate-slide-up">
                    <h3 className="text-xl font-bold mb-2">Web Development</h3>
                    <p>Modern web applications and websites</p>
                </div>
                <div
                    className="p-4 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/50 cursor-pointer animate-slide-up delay-75">
                    <h3 className="text-xl font-bold mb-2">App Development</h3>
                    <p>Mobile applications for iOS and Android</p>
                </div>
                <div
                    className="p-4 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/50 cursor-pointer animate-slide-up delay-150">
                    <h3 className="text-xl font-bold mb-2">Consulting</h3>
                    <p>Expert technical consulting services</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesMain;