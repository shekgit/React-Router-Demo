import React from 'react';

const Error = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-9xl pt-10 tracking-[0.35em] uppercase gap-10 animate-fade-in">
            <h1 className={"font-bold py-10 animate-bounce"}>404</h1>
            <p className={"text-3xl tracking-[0.25em] animate-pulse"}>Page Not Found</p>
            <h2 className={"py-10 animate-spin-slow"}> 🤭 </h2>
        </div>
    );
};

export default Error;