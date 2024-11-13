import React from 'react';
import ProjectCard from './projects-components/ProjectCard';

const projects = [
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/projects-images/esumbong.png`,
        title: 'E-Sumbong',
        description: 'E-Sumbong is an innovative web application designed to monitor and address concerns effectively...',
        link: 'https://github.com/mikko13/E-Sumbong',
        languages: 'HTML, CSS, JS, PHP',
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/projects-images/hiccup.png`,
        title: 'Hiccup',
        description: 'This E-Commerce Platform for Hiccup is a digital solution designed to streamline the ordering...',
        link: 'https://github.com/mikko13/Hiccup-Website',
        languages: 'HTML, CSS, JS, PHP',
    },
];

const Projects = () => {
    return (
        <section className="p-8 bg-[#284f62] bg-[-webkit-radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] bg-[radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)]">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </section>
    );
};

export default Projects;
