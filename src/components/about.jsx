import React from 'react';

const About = () => {
    return (
        <section id='about' className='bg-[#284f62] bg-[-webkit-radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] bg-[radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] p-8 sm:p-12 lg:p-14 mt-20'>
            <div className='flex flex-col lg:flex-row items-start'>
                <div className='mb-4 lg:mb-0'>
                    <div className='text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-2'>About Me</div>
                    <div className='text-white text-justify'>
                    I am an Information Technology student at the University of Santo Tomas with a strong passion 
                    for software development. With a solid foundation in programming languages, frameworks, and 
                    problem-solving techniques, I am constantly working to hone my skills in both front-end and 
                    back-end development. I aspire to become a software engineer, and I am eager to contribute to 
                    innovative projects, collaborate with teams, and grow in the dynamic field of technology. 
                    Always open to learning, I'm excited about the future and the opportunity to make a positive 
                    impact in the tech industry.
                    </div>
                </div>

                <div className='flex flex-col space-y-5 w-full lg:w-auto lg:ml-10'>
                    <a 
                        href="https://www.ust.edu.ph" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='bg-white p-4 rounded-lg shadow-lg w-full lg:w-[500px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer bg-opacity-80 backdrop-blur-md border border-white border-opacity-40'>
                        <div className='flex items-center space-x-4'>
                            <img src='images/img_ust.png' alt='Logo' className='w-20 h-auto' />
                            <div>
                                <div className='text-xl font-bold mb-2'>University of Santo Tomas</div>
                                <div className='text-gray-600'>BS Information Technology major in Web and Mobile Development</div>
                            </div>
                        </div>
                    </a>
                    <a 
                        href="https://www.sanbeda.edu.ph" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='bg-white p-4 rounded-lg shadow-lg w-full lg:w-[500px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer bg-opacity-80 backdrop-blur-md border border-white border-opacity-40'>
                        <div className='flex items-center space-x-4'>
                            <img src='images/img_sanbeda.png' alt='Logo' className='w-20' />
                            <div>
                                <div className='text-xl font-bold mb-2'>San Beda University</div>
                                <div className='text-gray-600'>Senior High School - Science, Technology, Engineering, and Mathematics</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
