import React, { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const dummyProjects = [
    {
        id: 1,
        name: "E-Commerce Platform",
        company: "Bairuha Tech",
        image: "/dummy-project-1.jpg", 
        description: "A robust scalable e-commerce solution built for high traffic with complete inventory management, payment gateway integration, and responsive design. This project was developed as part of a core team, focusing on modern frontend and robust backend workflows.",
        techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
        id: 2,
        name: "Book Publishing Portal",
        company: "Book Publishing Company",
        image: "/dummy-project-2.jpg", 
        description: "An independently designed and developed software solution for a book publishing company. Involved architecture, API design, and a complete UI tailored for authors and editors. Features a custom CMS, automated email notifications, and detailed analytics.",
        techStack: ["React", "Express.js", "MongoDB", "Redux"],
    },
    {
        id: 3,
        name: "Real-Time Chat App",
        company: "Bairuha Tech",
        image: "/dummy-project-3.jpg", 
        description: "A sophisticated real-time messaging application capable of handling thousands of concurrent users. Included feature sets like channels, direct messaging, typing indicators, and file sharing with seamless WebSockets integration.",
        techStack: ["NestJS", "Next.js", "Socket.io", "PostgreSQL"],
    },
    {
        id: 4,
        name: "Developer Portfolio UI",
        company: "Freelance Client",
        image: "/dummy-project-4.jpg", 
        description: "A fully responsive, highly stylish portfolio template designed for modern web developers and creatives. Features beautiful Neumorphic user interfaces, dynamic framer animations, and optimal SEO performance.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    }
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {dummyProjects.map((project) => (
                        <div 
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group p-6 rounded-[2rem] bg-[#F3F4F6] flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]"
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
                                {/* Replace the placeholder text with your real image when ready */}
                                <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-gray-500 font-nunito font-semibold">
                                    [Image: {project.image}]<br />
                                    Insert `&lt;img src="..." /&gt;` here.
                                </div>
                                {/* <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /> */}
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
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-[#F3F4F6] p-6 lg:p-10"
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

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6 lg:mt-0">
                            {/* Modal Image Area */}
                            <div className="w-full lg:w-1/2 flex-shrink-0">
                                <div 
                                    className="w-full h-[250px] sm:h-[350px] lg:h-[400px] rounded-2xl bg-gray-200 overflow-hidden relative"
                                    style={{
                                        boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px #ffffff"
                                    }}
                                >
                                    {/* Replace the placeholder text with your real image when ready */}
                                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-gray-500 font-nunito font-semibold bg-gray-100">
                                        [Image: {selectedProject.image}]<br/><br/>
                                        Remove this div and uncomment the img tag below when ready!
                                    </div>
                                    {/* <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" /> */}
                                </div>
                            </div>

                            {/* Modal Content Area */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                {selectedProject.company && (
                                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold font-nunito w-fit mb-4 bg-gray-200 text-gray-700 shadow-sm border border-gray-300">
                                        Company: {selectedProject.company}
                                    </span>
                                )}
                                
                                <h3 className="text-3xl md:text-4xl font-bold font-orbitron text-gray-800 mb-6">
                                    {selectedProject.name}
                                </h3>
                                
                                <h4 className="text-lg font-bold font-nunito text-gray-700 mb-2">Project Overview</h4>
                                <p className="font-nunito text-gray-600 text-base leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                <h4 className="text-lg font-bold font-nunito text-gray-700 mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                                    {selectedProject.techStack.map((tech, idx) => (
                                        <span key={idx} className="px-4 py-2 text-sm font-semibold text-rose-600 bg-white shadow-sm rounded-xl border border-gray-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Placeholder Action Buttons */}
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 text-white font-nunito font-bold hover:bg-gray-700 transition-colors shadow-lg">
                                        <ExternalLink size={18} /> Live Demo
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-800 font-nunito font-bold hover:bg-gray-50 transition-colors border border-gray-200 shadow-md">
                                        <Github size={18} /> Code
                                    </button>
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