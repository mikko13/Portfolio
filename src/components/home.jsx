import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-16 mx-4 md:mx-8">
            <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-48 w-full">
                <div className="intro-text mt-[-50px] text-center md:text-left flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1C3C4D]">
                        Hi, <br />I'm Mikko!
                    </h1>
                    <h2 className="text-xl md:text-2xl italic text-[#1C3C4D] mb-4">
                        3rd Year IT Student
                    </h2>
                    <div className="flex justify-center md:justify-start w-full">
                        <button
                            className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#1C3C4D] rounded-md group"
                        >
                            <span
                                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3e6579] rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3e6579] rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#3e6579] rounded-md group-hover:translate-x-0"
                            ></span>
                            <span
                                className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >
                                Contact Now!
                            </span>
                        </button>
                    </div>
                </div>
                <img
                    src="images/Mikko.png"
                    alt="Your Image"
                    className="w-[300px] md:w-[500px] h-auto object-cover select-none mt-8 md:mt-0"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </section>
        </div>
    );
};

export default Home;
