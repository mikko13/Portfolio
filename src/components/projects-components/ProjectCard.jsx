import React from 'react';

const ProjectCard = ({ project, index }) => {
    return (
        <div
            key={index}
            className={`text-white flex flex-col md:flex-row items-start my-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
        >
            <div className="w-full md:w-1/2 p-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="w-full h-auto rounded-md border-[2.5px] border-[#163849] duration-300 ease-in-out hover:scale-[1.025] hover:shadow-lg"
                    />
                </a>
            </div>
            <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
                <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                <p className="text-xs text-slim text-[#A1A1A1] mb-2">Languages: {project.languages}</p>
                <p className="text-sm sm:text-base text-justify">{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
