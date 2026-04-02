import React from 'react';

const About = () => {
    return (
        <section className="w-full  py-10 md:py-16 px-6 md:px-10 lg:px-20 bg-[#F3F4F6] flex justify-center border">
            <div
                className="w-full max-w-7xl rounded-[2.5rem] p-8 md:p-14 lg:p-20 bg-[#F3F4F6]"
                style={{
                    boxShadow: "inset 8px 8px 16px rgba(0,0,0,0.05), inset -8px -8px 16px #ffffff, -15px -15px 30px #ffffff, 15px 15px 30px rgba(0, 0, 0, 0.08)"
                }}
            >
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-gray-800 mb-4">
                        About <span className="text-rose-600">Me</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mb-10"></div>

                    <p className="font-nunito text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl text-center">
                        I am a passionate Full Stack Developer with 1.9+ years of professional experience across modern web technologies. I previously worked for 1 year and 2 months at Bairuha Tech, where I contributed to developing responsive, scalable front-end interfaces and robust backend systems using React, Next.js, Node.js, and NestJS.
                        <br /><br />
                        Currently, I am working at Ezebit Digital Solutions, where I continue to architect and orchestrate performance-driven web applications. I thrive on solving complex real-world problems through clean, efficient code and delivering reliable, user-friendly digital products. With a strong commitment to learning and adapting to new technologies, I am dedicated to building impactful digital experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;