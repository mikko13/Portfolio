import React from "react";
import { FaUsers, FaChalkboardTeacher, FaRegClock, FaLightbulb, FaArrowRight, FaCog } from "react-icons/fa";
import SkillCard from "./skills-components/skillscard";

const Skills = () => {
  const hardSkills = [
    { title: "HTML", progress: 100, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/html.svg` },
    { title: "CSS", progress: 100, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/css.svg` },
    { title: "JavaScript", progress: 85, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/javascript.svg` },
    { title: "PHP", progress: 90, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/php.svg` },
    { title: "AngularJS", progress: 60, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/angular.svg` },
    { title: "ReactJS", progress: 60, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/react.svg` },
    { title: "TailwindCSS", progress: 100, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/tailwind.png` },
    { title: "MaterializeCSS", progress: 100, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/materialize.webp` },
    { title: "Java", progress: 43, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/java.svg` },
    { title: "Kotlin", progress: 67, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/kotlin.svg` },
    { title: "C#", progress: 31, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/csharp.svg` },
    { title: "MySQL", progress: 95, imageUrl: `${process.env.PUBLIC_URL}/images/skills-images/mysql.svg` },    
  ];

  const softSkills = [
    { title: "Communication", icon: <FaUsers /> },
    { title: "Teamwork", icon: <FaUsers /> },
    { title: "Problem Solving", icon: <FaLightbulb /> },
    { title: "Time Management", icon: <FaRegClock /> },
    { title: "Leadership", icon: <FaChalkboardTeacher /> },
    { title: "Adaptability", icon: <FaCog /> },
  ];

  return (
    <section id="skills">
      <div className="container mx-auto px-8 py-8 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] pr-4 mb-8 lg:mb-0">
          <h2 className="text-center text-2xl font-bold mb-6 text-[#1c3c4d]">Hard Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {hardSkills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                progress={skill.progress}
                imageUrl={skill.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%]">
          <h2 className="text-center text-2xl font-bold mb-6 text-[#1c3c4d]">Soft Skills</h2>
          <div className="space-y-4">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
