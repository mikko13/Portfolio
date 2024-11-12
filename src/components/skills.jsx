import React from "react";
import { FaUsers, FaChalkboardTeacher, FaRegClock, FaLightbulb, FaArrowRight, FaCog } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { title: "HTML", progress: 100, imageUrl: "/images/skills-images/html.svg" },
    { title: "CSS", progress: 100, imageUrl: "/images/skills-images/css.svg" },
    { title: "JavaScript", progress: 85, imageUrl: "/images/skills-images/javascript.svg"},
    { title: "PHP", progress: 90, imageUrl: "/images/skills-images/php.svg" },
    { title: "AngularJS", progress: 60, imageUrl: "/images/skills-images/angular.svg" },
    { title: "ReactJS", progress: 60, imageUrl: "/images/skills-images/react.svg" },
    { title: "TailwindCSS", progress: 100, imageUrl: "/images/skills-images/tailwind.png" },
    { title: "MaterializeCSS", progress: 100, imageUrl: "/images/skills-images/materialize.webp" },
    { title: "Java", progress: 43, imageUrl: "/images/skills-images/java.svg" },
    { title: "Kotlin", progress: 67, imageUrl: "/images/skills-images/kotlin.svg" },
    { title: "C#", progress: 31, imageUrl: "/images/skills-images/csharp.svg" },
    { title: "MySQL", progress: 95, imageUrl: "/images/skills-images/mysql.svg" },
  ];

  return (
    <section id="skills">
    <div className="container mx-auto px-8 py-8 flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] pr-4 mb-8 lg:mb-0">
        <h2 className="text-center text-2xl font-bold mb-6 text-[#1c3c4d]">Hard Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group text-white bg-[#284f62] bg-[-webkit-radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] bg-[radial-gradient(circle,_#284f62_0%,_#1c3c4d_100%)] shadow-lg rounded-lg p-2 flex flex-row items-center text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transition-all cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-md mr-3">
                <img
                  src={skill.imageUrl}
                  alt={skill.title}
                  className="w-10 h-auto object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-1">{skill.title}</h3>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#7a9aad] group-hover:bg-[#e8a498] h-2 rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-white ml-2">{skill.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[50%]">
        <h2 className="text-center text-2xl font-bold mb-6 text-[#1c3c4d]">Soft Skills</h2>
        <div className="space-y-4">
          <div className="bg-[#1c3c4d] flex items-center text-[#1c3c4d] text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transition-all p-4 rounded-xl shadow-lg cursor-pointer">
            <FaUsers className="mr-4 text-2xl text-white group-hover:text-[#fff] transition-transform" />
            <span className="text-white group-hover:text-[#fff]">Communication</span>
          </div>
          <div className="bg-[#1c3c4d] flex items-center text-[#1c3c4d] text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transition-all p-4 rounded-xl shadow-lg cursor-pointer">
            <FaUsers className="mr-4 text-2xl text-white group-hover:text-[#fff] transition-transform" />
            <span className="text-white group-hover:text-[#fff]">Teamwork</span>
          </div>
          <div className="bg-[#1c3c4d] flex items-center text-[#1c3c4d] text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transition-all p-4 rounded-xl shadow-lg cursor-pointer">
            <FaLightbulb className="mr-4 text-2xl text-white group-hover:text-[#fff] transition-transform" />
            <span className="text-white group-hover:text-[#fff]">Problem Solving</span>
          </div>
          <div className="bg-[#1c3c4d] flex items-center text-[#1c3c4d] text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transition-all p-4 rounded-xl shadow-lg cursor-pointer">
            <FaRegClock className="mr-4 text-2xl text-white group-hover:text-[#fff] transition-transform" />
            <span className="text-white group-hover:text-[#fff]">Time Management</span>
          </div>
          <div className="bg-[#1c3c4d] flex items-center text-[#1c3c4d] text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transition-all p-4 rounded-xl shadow-lg cursor-pointer">
            <FaChalkboardTeacher className="mr-4 text-2xl text-white group-hover:text-[#fff] transition-transform" />
            <span className="text-white group-hover:text-[#fff]">Leadership</span>
          </div>
          <div className="bg-[#1c3c4d] flex items-center text-[#1c3c4d] text-sm hover:bg-gradient-to-r from-[#ff7f50] to-[#ff6347] hover:scale-[1.025] transition-all p-4 rounded-xl shadow-lg cursor-pointer">
            <FaCog className="mr-4 text-2xl text-white group-hover:text-[#fff] transition-transform" />
            <span className="text-white group-hover:text-[#fff]">Adaptability</span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
