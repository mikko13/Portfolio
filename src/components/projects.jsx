import React, { useEffect, useRef } from 'react';
import ProjectCard from './projects-components/ProjectCard';
import './projects-components/ProjectsUI.css';


const projects = [
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/projects-images/esumbong.png`,
        title: 'E-Sumbong',
        description: 'E-Sumbong is an innovative web application designed to monitor and address concerns effectively. With its intuitive interface and comprehensive features, E-Sumbong empowers users to track, report, and collaborate on issues within their communities and beyond. E-Sumbong provides a platform for users to document observations, share photographs, and pinpoint locations of concern to Philippine agencies and companies. The app facilitates informed decision-making and encourages collective action towards stewardship. E-Sumbong also fosters community engagement by enabling users to connect with local authorities, environmental organizations, and fellow activists to initiate and participate in impactful initiatives and campaigns. By harnessing the power of technology and community collaboration',
        link: 'https://github.com/mikko13/E-Sumbong',
        languages: 'PHP',
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/images/projects-images/hiccup.png`,
        title: 'Hiccup',
        description: 'E-Sumbong is an innovative web application designed to monitor and address concerns effectively. With its intuitive interface and comprehensive features, E-Sumbong empowers users to track, report, and collaborate on issues within their communities and beyond. E-Sumbong provides a platform for users to document observations, share photographs, and pinpoint locations of concern to Philippine agencies and companies. The app facilitates informed decision-making and encourages collective action towards stewardship. E-Sumbong also fosters community engagement by enabling users to connect with local authorities, environmental organizations, and fellow activists to initiate and participate in impactful initiatives and campaigns. By harnessing the power of technology and community collaboration',
        link: 'https://github.com/mikko13/Hiccup-Website',
        languages: 'PHP',
    },
];

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const projectCards = section.querySelectorAll('.fade-up-projects');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            { threshold: 0.2 }
        );

        projectCards.forEach((card) => observer.observe(card));

        return () => {
            projectCards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <section
            id='projects'
            className="p-8 bg-[#284f62] bg-[-webkit-radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] bg-[radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)]"
            ref={sectionRef}
        >
            <div>
                <p className='text-center text-white font-bold text-4xl'>See What I've Been Up To</p>
                <hr className="my-4 border-t-2 border-white w-full mx-auto" />
            </div>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </section>
    );
};

export default Projects;
