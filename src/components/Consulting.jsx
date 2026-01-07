import React from 'react';

const Consulting = () => {
    return (
        <div className="p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-amber-500/10">
            <h2 className="text-3xl font-bold mb-4">Consulting Services</h2>
            <p className="text-gray-300 mb-6">
                Get expert advice and guidance for your technology projects.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Technology Strategy</li>
                <li>Architecture Design</li>
                <li>Code Reviews</li>
                <li>Team Training</li>
            </ul>
        </div>
    );
};

export default Consulting;