import React from 'react';
import { Code2, Monitor, Server, Database, Wrench, BadgeCheck } from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-rose-500" />,
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    icon: <Monitor className="w-6 h-6 text-rose-500" />,
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Sass"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-rose-500" />,
    skills: ["Node.js", "Express.js", "NestJS"]
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6 text-rose-500" />,
    skills: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Others",
    icon: <Wrench className="w-6 h-6 text-rose-500" />,
    skills: ["Git", "GitHub"]
  }
];

const Skills = () => {
    return (
        <section className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[#F3F4F6] flex justify-center">
            <div className="w-full max-w-7xl">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-gray-800 mb-4">
                        My <span className="text-rose-600">Skills</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mb-10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((group, index) => (
                        <div 
                            key={index}
                            className="p-8 rounded-[2rem] bg-[#F3F4F6] flex flex-col"
                            style={{
                                boxShadow: "-10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.06)"
                            }}
                        >
                            <div className="flex items-center space-x-5 mb-8">
                                <div 
                                    className="w-14 h-14 rounded-2xl bg-[#F3F4F6] flex items-center justify-center flex-shrink-0"
                                    style={{
                                        boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px #ffffff"
                                    }}
                                >
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-bold font-orbitron text-gray-800">{group.category}</h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                                {group.skills.map((skill, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#F3F4F6] transition-all hover:-translate-y-1 hover:text-rose-600 cursor-default group"
                                        style={{
                                            boxShadow: "-5px -5px 10px #ffffff, 5px 5px 10px rgba(0, 0, 0, 0.05)"
                                        }}
                                    >
                                        <BadgeCheck className="w-4 h-4 text-rose-400 group-hover:text-rose-600 transition-colors" />
                                        <span className="text-sm md:text-base font-nunito font-bold text-gray-600 group-hover:text-gray-800 transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;