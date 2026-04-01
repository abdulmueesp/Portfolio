"use client";
import React, { useState } from 'react';
import RubiksCube from './CubeScene';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for future submit logic
        alert("Thanks for getting in touch! I will respond shortly.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-20 bg-[#F3F4F6] flex justify-center">
            {/* Master Single Box */}
            <div 
                className="w-full max-w-6xl p-8 md:p-12 lg:p-16 rounded-[2.5rem] bg-[#F3F4F6]"
                style={{
                    boxShadow: "inset 8px 8px 16px rgba(0,0,0,0.03), inset -8px -8px 16px #ffffff, -15px -15px 30px #ffffff, 15px 15px 30px rgba(0, 0, 0, 0.08)"
                }}
            >
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    
                    {/* Left Side: Contact Form (Smaller footprint) */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-2xl md:text-4xl font-bold font-orbitron text-gray-800 mb-2">
                            Let's <span className="text-rose-600">Connect</span>
                        </h2>
                        <div className="w-16 h-1 mt-1 bg-gradient-to-r from-rose-600 to-rose-400 rounded-full mb-8 opacity-80 animate-pulse"></div>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                            {/* Full Name */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-rose-500">
                                    <User size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Full Name"
                                    className="w-full bg-[#F3F4F6] rounded-xl py-3.5 pl-12 pr-4 text-gray-700 text-sm md:text-base font-nunito font-semibold placeholder-gray-400 focus:outline-none transition-shadow duration-300"
                                    style={{
                                        boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px #ffffff"
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-rose-500">
                                    <Mail size={18} />
                                </div>
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="Email Address"
                                    className="w-full bg-[#F3F4F6] rounded-xl py-3.5 pl-12 pr-4 text-gray-700 text-sm md:text-base font-nunito font-semibold placeholder-gray-400 focus:outline-none transition-shadow duration-300"
                                    style={{
                                        boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px #ffffff"
                                    }}
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <div className="absolute top-4 left-0 flex items-start pl-4 pointer-events-none text-rose-500">
                                    <MessageSquare size={18} />
                                </div>
                                <textarea 
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    placeholder="Your Message..."
                                    className="w-full bg-[#F3F4F6] rounded-xl py-3.5 pl-12 pr-4 text-gray-700 text-sm md:text-base font-nunito font-semibold placeholder-gray-400 focus:outline-none resize-none transition-shadow duration-300"
                                    style={{
                                        boxShadow: "inset 5px 5px 10px rgba(0,0,0,0.05), inset -5px -5px 10px #ffffff"
                                    }}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                className="group mt-2 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#F3F4F6] text-gray-700 hover:text-rose-600 font-orbitron font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                                style={{
                                    boxShadow: "-5px -5px 10px #ffffff, 5px 5px 10px rgba(0, 0, 0, 0.08)"
                                }}
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Interactive Rubiks Cube Block */}
                    <div 
                        className="w-full lg:w-1/2 h-full min-h-[300px] md:min-h-[450px] rounded-3xl bg-[#F3F4F6] overflow-hidden flex flex-col justify-center"
                        style={{
                            boxShadow: "inset 6px 6px 12px rgba(0,0,0,0.04), inset -6px -6px 12px #ffffff"
                        }}
                    >
                        <RubiksCube />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;