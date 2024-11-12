import React from 'react';
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div className="home-background flex flex-col items-center justify-center mt-14 px-4 md:px-12">
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
                <div className="intro-text mt-0 md:mt-[-50px] text-center md:text-left flex flex-col items-center md:items-start w-[250px] md:w-[350px] lg:w-[400px]">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C3C4D]">
                        <span className="inline-block">
                            <ReactTyped
                                strings={["Hello!", "I'm Mikko!"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl italic text-[#1C3C4D] mb-4">
                        <span className="inline-block">
                            <ReactTyped
                                strings={["3rd Year IT Student"]}
                                typeSpeed={40}
                                backSpeed={50}
                                startDelay={2000}
                                showCursor={false}
                            />
                        </span>
                    </h2>
                    <div className="flex justify-center md:justify-start w-full">
                        <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#1C3C4D] rounded-md group">
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3e6579] rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3e6579] rounded group-hover:-ml-4 group-hover:-mb-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-[#3e6579] rounded-md group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                                Contact Now!
                            </span>
                        </button>
                    </div>
                </div>
                <img
                    src="images/Mikko.png"
                    alt="Mikko"
                    className="w-[300px] md:w-[350px] lg:w-[480px] h-auto object-cover select-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </section>
        </div>
    );
};

export default Home;
