import React from 'react';
import ProjectCard from './projects-components/ProjectCard';

const projects = [
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/projects-images/esumbong.png`,
        title: 'E-Sumbong',
        description: 'E-Sumbong is an innovative web application designed to monitor and address concerns effectively. With its intuitive interface and comprehensive features, E-Sumbong empowers users to track, report, and collaborate on issues within their communities and beyond. E-Sumbong provides a platform for users to document observations, share photographs, and pinpoint locations of concern to Philippine agencies and companies. The app facilitates informed decision-making and encourages collective action towards stewardship. E-Sumbong also fosters community engagement by enabling users to connect with local authorities, environmental organizations, and fellow activists to initiate and participate in impactful initiatives and campaigns. By harnessing the power of technology and community collaboration.',
        link: 'https://github.com/mikko13/E-Sumbong',
        languages: 'HTML, CSS, JS, PHP',
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/projects-images/hiccup.png`,
        title: 'Hiccup',
        description: 'This E-Commerce Platform for Hiccup is a digital solution designed to streamline the ordering and purchasing process for customers. This platform allows users to browse the coffee shop\'s menu, place orders online, and make payments securely. It also includes features for managing customer accounts, tracking orders, and offering promotions. The system aims to enhance customer convenience and operational efficiency for Hiccup by integrating online sales with their existing business operations.',
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
