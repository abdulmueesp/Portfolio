import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const dummyProjects = [
    {
        id: 1,
        name: "Question Bank & Paper Generator",
        company: "Freelance Project",
        image: "/question.jpeg",
        description: "A system to organize questions and generate question papers with role-based access for schools.",
        keyContributions: [
            "Designed and managed a structured question bank for subjects, books, chapters, and questions",
            "Developed dynamic question paper generation with flexible question selection",
            "Implemented role-based access for schools with controlled content distribution",
            "Enabled downloadable question papers in Word format for easy use"
        ],
        techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
        id: 2,
        name: "Suprabhaatham News Portal",
        company: "Team Project @ Bairuha Tech",
        image: "/suprabhatham.png",
        description: "A digital news portal delivering real-time updates across Gulf and Indian regions with a structured and user-friendly content experience.",
        keyContributions: [
            "Developed a cron-based automation system for scheduled publishing of news and e-paper editions",
            "Enabled time-driven auto-release of content including daily and weekly editions",
            "Improved reliability of content delivery by eliminating manual publishing delays",
            "Enhanced UI for better content visibility and user experience"
        ],
        techStack: ["Next.js", "React", "Sass", "Strapi"],
    },
    {
        id: 3,
        name: "Online booking platform-homesloc",
        company: "Team Project @ Bairuha Tech",
        image: "/homesloc.jpeg",
        description: "A multi-service booking platform for reserving hotels, convention halls, and tourist packages.",
        keyContributions: [
            "Built a responsive frontend for multi-service booking including hotels, halls, and tourist packages",
            "Designed smooth booking workflows for enhanced user experience",
            "Integrated secure payment gateway using Razorpay",
            "Implemented a role-based admin panel for managing bookings and services",
            "Improved SEO with optimized and structured frontend implementation"
        ],
        techStack: ["React", "Next.js", "Tailwind CSS"],
    },

];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof dummyProjects[0] | null>(null);

    return (
        <section className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[#F3F4F6] flex justify-center">
            <div className="w-full max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-gray-800 mb-4">
                        Featured <span className="text-rose-600">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mb-10 opacity-80 animate-pulse"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {dummyProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => {
                                console.log('Clicked project:', project.name);
                                setSelectedProject(project);
                            }}
                            className="relative z-10 group p-6 rounded-[2rem] bg-[#F3F4F6] flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                boxShadow: "-10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.06)"
                            }}
                        >
                            {/* Project Image Placeholder */}
                            <div
                                className="w-full h-[250px] sm:h-[300px] rounded-2xl bg-gray-200 overflow-hidden relative mb-6"
                                style={{
                                    boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px #ffffff"
                                }}
                            >
                                {/* Real Image rendering */}
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            {/* Project Details */}
                            <div>
                                <h3 className="text-2xl font-bold font-orbitron text-gray-800 group-hover:text-rose-600 transition-colors mb-3">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 font-nunito text-base line-clamp-2 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 text-xs font-semibold text-gray-500 bg-[#e8e9ec] rounded-lg">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-3 py-1 text-xs font-semibold text-gray-500 bg-[#e8e9ec] rounded-lg">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Modal Popup */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-[#F3F4F6] p-6 lg:p-10"
                        style={{
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full flex items-center justify-center bg-[#F3F4F6] text-gray-600 hover:text-rose-600 hover:scale-105 transition-all z-10"
                            style={{
                                boxShadow: "-4px -4px 8px #ffffff, 4px 4px 8px rgba(0,0,0,0.1)"
                            }}
                        >
                            <X size={20} className="font-bold" />
                        </button>

                        <div className="flex flex-col mt-6 lg:mt-2">
                            {/* Modal Content Area (Full Width) */}
                            <div className="w-full flex flex-col justify-center">
                                <h3 className="text-3xl md:text-4xl font-bold font-orbitron text-gray-800 mb-3">
                                    {selectedProject.name}
                                </h3>

                                {selectedProject.company && (
                                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold font-nunito w-fit mb-4 bg-gray-200 text-gray-700 shadow-sm border border-gray-300">
                                        {selectedProject.company}
                                    </span>
                                )}

                                {selectedProject.description && (
                                    <p className="font-nunito text-gray-600 text-[1.05rem] leading-relaxed mb-8">
                                        {selectedProject.description}
                                    </p>
                                )}

                                {selectedProject.keyContributions && selectedProject.keyContributions.length > 0 && (
                                    <>
                                        <h4 className="text-lg font-bold font-nunito text-gray-700 mb-3">Key Contributions</h4>
                                        <ul className="list-disc list-outside pl-5 font-nunito text-gray-600 text-base leading-relaxed mb-6 space-y-2">
                                            {selectedProject.keyContributions.map((contribution, idx) => (
                                                <li key={idx} className="pl-1">{contribution}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <h4 className="text-lg font-bold font-nunito text-gray-700 mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                                    {selectedProject.techStack.map((tech, idx) => (
                                        <span key={idx} className="px-4 py-2 text-sm font-semibold text-rose-600 bg-white shadow-sm rounded-xl border border-gray-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;