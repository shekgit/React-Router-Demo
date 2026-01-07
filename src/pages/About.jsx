import React from 'react';

const About = () => {

    return (
        <div className="p-4 flex flex-col items-start justify-center pt-10 text-justify w-full h-full lg:h-screen md:h-screen sm:h-screen gap-10 overflow-hidden animate-fade-in">
            <h2 className={"text-xl uppercase tracking-[0.2em] p-1 font-semibold bg-amber-700 rounded "}>About</h2>
            <p
            className={"columns-1 md:columns-2 lg:columns-2 gap-8 text-base opacity-70"}
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dignissimos doloremque dolorum expedita
                inventore nostrum quibusdam quisquam voluptatem! Animi cumque dolore esse ex similique. Debitis hic id
                maxime ullam. Earum eveniet nulla saepe veritatis. A, adipisci alias assumenda blanditiis consequatur
                consequuntur corporis cum cumque eum eveniet exercitationem fugiat impedit, libero magnam minus,
                molestias mollitia nostrum optio praesentium provident quam qui quisquam quos ratione repellat soluta
                vero voluptates. Ab accusamus aperiam expedita incidunt nemo obcaecati pariatur provident quis
                repellendus rerum? aque et. Cumque.</p>

            <h2 className={"text-xl uppercase tracking-[0.2em] p-1 font-semibold bg-amber-700 rounded"}>Vision</h2>

            <ul className={'list-disc px-4 text-justify'}>
                <li className={'py-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </li>
                <li className={'py-2'}>Aut, dignissimos doloremque dolorum expedita
                    inventore nostrum quibusdam quisquam voluptatem! Animi cumque dolore esse ex similique. Debitis hic id
                    maxime ullam. Earum eveniet nulla saepe veritatis.</li>
                <li className={'py-2'}>Ab accusamus aperiam expedita incidunt nemo obcaecati pariatur provident quis
                    repellendus rerum?</li>
                <li className={'py-2'}>laborum magni minima possimus praesentium repellendus soluta vel..</li>
                <li className={'py-2'}>Lorem ipsum dolor.</li>
            </ul>
        </div>

    );
};

export default About;