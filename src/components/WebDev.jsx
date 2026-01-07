import React from 'react';

const WebDev = () => {
    return (
        <div className="p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-amber-500/10">
            <h2 className="text-3xl font-bold mb-4">Web Development Services</h2>
            <p className="text-gray-300 mb-6">
                We build modern, responsive web applications using the latest technologies.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>React.js Applications</li>
                <li>Node.js Backend</li>
                <li>E-commerce Solutions</li>
                <li>Progressive Web Apps</li>
            </ul>
        </div>
    );
};

export default WebDev;