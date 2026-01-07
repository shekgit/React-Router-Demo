import React, {useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
    });
    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.msg}
        `;
        alert(message);
        setFormData({
            name: '',
            email: '',
            msg: '',
        });

    };
    return (
        <div
            className={' flex flex-col items-center justify-start  text-justify w-full h-screen gap-10 p-6 animate-fade-in'}>
            <h2 className={"sm:text-3xl uppercase tracking-[0.2em] text-xl "}>Get in touch...</h2>

            <form
                onSubmit={handleSubmit}
                className={'border-1 rounded flex flex-col items-start justify-center w-[60%] text-xl gap-3 p-4'}>
                <input
                    onChange={handleInput} name="name" value={formData.name}
                    type="text" placeholder={'Name'}

                    className={'outline-none p-3 w-full bg-gray-800 tracking-[0.12em] rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-all duration-300'}
                />
                <input
                    onChange={handleInput}
                    name="email" value={formData.email}
                    type="email" placeholder={'Email'}

                    className={'outline-none p-3 w-full bg-gray-800 tracking-[0.12em] rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-all duration-300'}
                />
                <textarea
                    onChange={handleInput} value={formData.msg}
                    name="msg" id="" cols="30" rows="10" placeholder={'Your message here'}

                    className={'outline-none p-3 w-full bg-gray-800 tracking-[0.12em] rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-all duration-300'}
                ></textarea>
                <button
                    className={'p-2 tracking-[0.15em] uppercase bg-amber-700 rounded border-none cursor-pointer transition-all duration-300 hover:bg-amber-600 hover:scale-105 active:scale-95 shadow-lg hover:shadow-amber-500/30'}
                    type="submit">Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;