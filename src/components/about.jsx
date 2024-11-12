import React from 'react';
import TextBlock from './about-components/TextBlock';
import Card from './about-components/Card';

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#284f62] bg-[-webkit-radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] bg-[radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] p-8 sm:p-12 lg:p-14 mt-20"
        >
            <div className="flex flex-col lg:flex-row items-start">
                <TextBlock />
                <div className="flex flex-col space-y-5 w-full lg:w-auto lg:ml-10">
                    <Card
                        imgSrc="images/img_ust.png"
                        imgAlt="Logo"
                        title="University of Santo Tomas"
                        subtitle="BS Information Technology major in Web and Mobile Development"
                        link="https://www.ust.edu.ph"
                    />
                    <Card
                        imgSrc="images/img_sanbeda.png"
                        imgAlt="Logo"
                        title="San Beda University"
                        subtitle="Senior High School - Science, Technology, Engineering, and Mathematics"
                        link="https://www.sanbeda.edu.ph"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
