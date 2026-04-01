
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ For menu & close icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#F3F4F6] border-b border-gray-200 z-50">
      <div className="h-[70px] px-6 flex items-center w-full md:px-10 lg:px-20">
        {/* Left Section (Logo) */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gray-400 rounded-full overflow-hidden flex items-center justify-center p-0.5">
              <Image
                src="/muees.png"
                alt="Profile Logo"
                width={40}
                height={40}
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
            </div>
            <span className="text-base md:text-lg font-bold font-nunito text-gray-800">
              ABDUL MUEES
            </span>
          </Link>
        </div>

        {/* Center Section (Desktop Navigation) */}
        <nav
          className="hidden md:flex justify-center flex-none space-x-8 font-semibold font-nunito text-gray-600"
        >
          <Link href="/" className="hover:text-secondary">Home</Link>
          <Link href="/about" className="hover:text-secondary">About</Link>
          <Link href="/skills" className="hover:text-secondary">Skills</Link>
          <Link href="/projects" className="hover:text-secondary">Projects</Link>
          <Link href="/contact" className="hover:text-secondary">Contact</Link>
        </nav>

        {/* Right Section (Button + Mobile Menu Toggle) */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <button
            className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full font-bold font-nunito text-gray-800 bg-[#F3F4F6] transition-all hover:scale-95"
            style={{
              boxShadow: "-8px -8px 15px #ffffff, 8px 8px 15px rgba(0, 0, 0, 0.1)"
            }}
          >
            Download CV
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown from Top) */}
      <div
        className={`absolute top-full left-0 w-full bg-[#F3F4F6] shadow-lg transition-all duration-300 ease-in-out z-40 overflow-hidden ${menuOpen ? "max-h-[500px] border-b border-gray-300" : "max-h-0"
          }`}
      >

        <nav
          className="flex flex-col p-6 space-y-4 text-lg font-semibold font-nunito text-gray-600"
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className="pt-4">
            <button
              className="flex w-full items-center justify-center px-6 py-3 rounded-full font-bold font-nunito text-gray-800 bg-[#F3F4F6] transition-all hover:scale-95"
              style={{
                boxShadow: "-8px -8px 15px #ffffff, 8px 8px 15px rgba(0, 0, 0, 0.1)"
              }}
            >
              Download CV
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay for background dim when menu open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

