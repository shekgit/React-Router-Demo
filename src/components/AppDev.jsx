import React from 'react';

const AppDev = () => {
    return (
        <div className="p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-amber-500/10">
            <h2 className="text-3xl font-bold mb-4">App Development Services</h2>
            <p className="text-gray-300 mb-6">
                We create native and cross-platform mobile applications.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>React Native Apps</li>
                <li>Flutter Development</li>
                <li>iOS & Android Native</li>
                <li>App Maintenance</li>
            </ul>
        </div>
    );
};

export default AppDev;