import React from 'react';
import { Linkedin } from 'lucide-react';

const Banner = () => {
    return (
        <section className="w-full min-h-[calc(100vh-70px)] flex items-center justify-center px-6 md:px-10 lg:px-20 py-12 md:py-0 bg-[#F3F4F6]">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-0 md:gap-12 ">
                {/* Left Section (Text) */}
                <div className="flex-1 flex flex-col items-start justify-center space-y-4 ">
                    <div>
                        <p className="text-xl md:text-2xl font-nunito text-gray-600 font-semibold mb-2">
                            Hi,
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-gray-800 leading-tight">
                            I'm <span className="bg-gradient-to-r from-rose-600 to-rose-400 text-transparent bg-clip-text">Abdul Muees</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-nunito text-gray-600 mt-4">
                            A Full Stack Developer.<span className="text-rose-600 animate-pulse">|</span>
                        </h2>
                        <p className="font-nunito text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mt-4">
                            I am a Full Stack Developer building scalable, high-performance web applications with intuitive front-end experiences and robust back-end systems for seamless digital solutions.
                        </p>
                    </div>

                    <div className="pt-6">
                        <p className="text-gray-600 font-nunito text-sm uppercase tracking-wider font-semibold mb-4">
                            Find with us
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center w-12 h-12 bg-[#F3F4F6] rounded-xl text-gray-700 hover:text-rose-600 transition-all hover:scale-95"
                                style={{
                                    boxShadow: "-6px -6px 12px #ffffff, 6px 6px 12px rgba(0, 0, 0, 0.1)"
                                }}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="flex-1 flex justify-center md:justify-end w-full  mt-0 ">
                    <div className="relative flex items-end justify-center w-[280px] h-[360px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px]">
                        {/* --- ADVANCED NEUMORPHIC MODEL --- */}

                        {/* 1. Pulsing Ambient Glow */}
                        <div className="absolute top-10 left-10 w-40 h-40 md:w-56 md:h-56 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

                        {/* 2. Top Half (Floating Neumorphic Circle) */}
                        <div
                            className="hidden md:block absolute top-[5%] left-1/2 -translate-x-1/2 md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full bg-[#F3F4F6]"
                            style={{
                                boxShadow: "inset 8px 8px 16px rgba(0,0,0,0.02), inset -8px -8px 16px #ffffff, -12px -12px 24px #ffffff, 12px 12px 24px rgba(0, 0, 0, 0.08)"
                            }}
                        ></div>

                        {/* 3. Bottom Half (Main Pedestal) */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-[55%] md:h-[60%] rounded-3xl bg-[#F3F4F6]"
                            style={{
                                boxShadow: "-15px -15px 30px #ffffff, 15px 15px 30px rgba(0, 0, 0, 0.1)"
                            }}
                        ></div>

                        {/* Foreground Image */}
                        <img
                            src="/banner.png"
                            alt="Abdul Muees"
                            className="relative z-10 w-[95%] h-full object-contain object-bottom drop-shadow-2xl "
                        />

                        {/* 4. Floating Glassmorphic Badge */}
                        <div className="absolute bottom-[15%] left-[-10%] md:left-[-15%] w-[130px] h-[70px] md:w-[160px] md:h-[80px] rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xl z-20 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                            <p className="text-xl md:text-2xl font-bold font-orbitron text-rose-600">15+</p>
                            <p className="text-xs md:text-sm font-nunito font-semibold text-gray-700">Projects Done</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;